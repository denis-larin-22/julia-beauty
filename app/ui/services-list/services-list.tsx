import { IServiceItem, ServiceList } from "../../lib/types/definitions";
import ServicesItem from "./services-item";

interface IProps {
    list: ServiceList
};

function comparePrices(a: IServiceItem, b: IServiceItem) {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
}

export default function ServicesList({ list }: IProps) {
    let maleRoom: Array<IServiceItem> = [];
    let femaleRoom: Array<IServiceItem> = [];

    list.forEach((item) => {
        const room = item.room;

        room === 'male' ? maleRoom.push(item) : femaleRoom.push(item);
    });

    maleRoom.sort(comparePrices);
    femaleRoom.sort(comparePrices);

    return (
        <div className="max-w-[800px] text-t-gray mx-auto">
            <p className="text-t-xl mt-4">Для неї:</p>
            <dl className="flex flex-col items-center gap-y-5 mx-auto py-10">
                {femaleRoom.map((item, index) => (
                    <ServicesItem
                        key={index}
                        index={index}
                        item={item}
                    />
                ))}
            </dl>
            <p className="text-t-xl">Для нього:</p>
            <dl className="flex flex-col items-center gap-y-5 mx-auto py-10">
                {maleRoom.map((item, index) => (
                    <ServicesItem
                        key={index}
                        index={index}
                        item={item}
                    />
                ))}
            </dl>
        </div>
    )
};