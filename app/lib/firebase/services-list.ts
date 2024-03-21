import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { ServiceList } from "../types/definitions";

export const getServiceListFromFirestoreDB = async (): Promise<ServiceList> => {
    try {
        const servicesCollectionRef = collection(db, "service-list");
        const data = await getDocs(servicesCollectionRef);

        const servicesArray: ServiceList = data.docs.map((doc) => ({
            id: doc.id,
            room: doc.data().room,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price
        }));

        return servicesArray;
    } catch (error) {
        console.error("Error when retrieving data from storage:", error);
        throw error;
    }
};