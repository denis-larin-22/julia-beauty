import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db, storage } from "./firebase-config";
import {
    getDownloadURL,
    listAll,
    ref,
    ref as storageRef,
    uploadBytes
} from "firebase/storage";
import { ChildFolders, IWorkInfo, ImagesArray } from "../types/definitions";

// CREATE

// INFO. Adds a new work item information (name, deskription) to Firestore Database
export const addNewWorkToFirestoreDB = async (workInfo: IWorkInfo, id: string) => {
    try {
        const result = await setDoc(doc(db, "gallery", id), workInfo);
        console.log("Work information successfully added to Firestore", result);
    } catch (error: any) {
        console.error("Error adding work information to Firestore:", error.message);
        throw error;
    }
}

// IMAGES. Uploades images to before/after folders for the new work item to Firebase Storage
const uploadImages = async (imagesArray: ImagesArray, id: string, folder: ChildFolders) => {
    if (imagesArray.length === 0) return;

    await Promise.all(imagesArray.map(async (image, index) => {
        // Creates reference in the form: id-folder/before or after folder/image
        const imageRef = storageRef(storage, `${id}/${folder}/image${index + 1}`);
        // Uploades image
        await uploadBytes(imageRef, image);
    }));
};

export const addImagesToStorage = async (imagesBefore: ImagesArray, imagesAfter: ImagesArray, id: string) => {
    try {
        await Promise.all([
            uploadImages(imagesBefore, id, 'before'),
            uploadImages(imagesAfter, id, 'after')
        ]);
        console.log("Images successfully uploaded to Firebase Storage");
    } catch (error) {
        console.error('Error uploading images to storage:', error);
    }
};

// READ 

// INFO.
export const getWorkItemFromFirestoreDB = async (id: string): Promise<IWorkInfo> => {
    try {
        const docRef = doc(db, "gallery", id);
        const docSnap = await getDoc(docRef);
        return docSnap.data() as IWorkInfo;
    } catch (error) {
        console.error("Error when retrieving data from storage:", error);
        throw error;
    }
};

export const getWorksListFromFirestoreDB = async (): Promise<Array<IWorkInfo & { id: string }>> => {
    try {
        const worksCollectionRef = collection(db, "gallery");
        const data = await getDocs(worksCollectionRef);

        const worksList: Array<IWorkInfo & { id: string }> = data.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description
        }));

        return worksList;
    } catch (error) {
        console.error("Error when retrieving data from storage:", error);
        throw error;
    }
}

// IMAGES 
export const getWorksImagesFromStorage = async (id: string, folderName: ChildFolders) => {
    try {
        const storageRef = ref(storage, `/${id}/${folderName}`);
        const result = await listAll(storageRef);

        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
        const images = await Promise.all(urlPromises);
        return images;
    } catch (error) {
        console.error('Error when retrieving images from storage:', error);
        throw error;
    }
};

export const getAllPreviewWorksWithImages = async () => {
    try {
        const worksList = await getWorksListFromFirestoreDB();

        const promises = worksList.map(async (work) => {
            try {
                const urlImageList = await getWorksImagesFromStorage(work.id, 'after');

                return {
                    id: work.id,
                    name: work.name,
                    image: urlImageList[0],
                };
            } catch (error) {
                console.error(`Error fetching images for work with ID ${work.id}:`, error);
                return null;
            }
        });

        const listWithImages = await Promise.all(promises);

        // Filter out any null entries (rejected requests)
        const filteredList = listWithImages.filter(item => item !== null);

        return filteredList;
    } catch (error) {
        console.error('Error fetching works list:', error);
        return [];
    }
}