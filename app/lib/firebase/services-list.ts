import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

interface IServiceItem {
    name: string,
    description: string,
    price: string
};

type ServiceList = Array<IServiceItem>;

export const getServiceListFromFirestoreDB = async (): Promise<ServiceList> => {
    try {
        const servicesCollectionRef = collection(db, "service-list");
        const data = await getDocs(servicesCollectionRef);

        const servicesArray: ServiceList = data.docs.map((doc) => ({
            id: doc.id,
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