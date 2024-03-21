import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { ICommentObj } from "../types/definitions";

export const getCommentsFromFirestoreDB = async (): Promise<ICommentObj[]> => {
    try {
        const commentsCollectionRef = collection(db, "feedback");
        const data = await getDocs(commentsCollectionRef);

        const commentsArray: ICommentObj[] = data.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            comment: doc.data().comment
        }));

        return commentsArray;
    } catch (error) {
        console.error("Error when retrieving data from storage:", error);
        throw error;
    }
}