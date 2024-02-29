import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export interface CommentObj {
    id: string,
    name: string,
    comment: string
}

export const getCommentsFromFirestoreDB = async (): Promise<CommentObj[]> => {
    try {
        const commentsCollectionRef = collection(db, "feedback");
        const data = await getDocs(commentsCollectionRef);

        const commentsArray: CommentObj[] = data.docs.map((doc) => ({
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