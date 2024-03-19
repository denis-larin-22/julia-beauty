import { IServiceItem, ServiceList } from "../../lib/firebase/services-list";
import AnimatedWrap from "../common/animated-wrap";

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
                    <AnimatedWrap
                        key={index}
                        y={30}
                        opacity={0}
                        duration={0.4}
                        delay={index - (0.92 * index)}
                        styles="relative w-full flex items-center justify-between text-t-sm-semibold md:text-t-md text-t-gray hover:bg-t-brown-light p-3 rounded-lg duration-150"
                    >
                        <dt>
                            <p className="text-black">{item.name}</p>
                            <p className="max-w-[550px] before:block before:h-[3px] before:w-16 before:bg-t-brown before:mt-1 before:rounded-3xl">{item.description}</p>
                        </dt>
                        <dd className="text-right">
                            {item.price}
                        </dd>
                    </AnimatedWrap>
                ))}
            </dl>
            <p className="text-t-xl mt-4">Для нього:</p>
            <dl className="flex flex-col items-center gap-y-5 mx-auto py-10">
                {maleRoom.map((item, index) => (
                    <AnimatedWrap
                        key={index}
                        y={30}
                        opacity={0}
                        duration={0.4}
                        delay={index - (0.92 * index)}
                        styles="relative w-full flex items-center justify-between text-t-sm-semibold md:text-t-md hover:bg-t-brown-light p-3 rounded-lg duration-150"
                    >
                        <dt>
                            <p className="text-black">{item.name}</p>
                            <p className="max-w-[550px] before:block before:h-[3px] before:w-16 before:bg-t-brown before:mt-1 before:rounded-3xl">{item.description}</p>
                        </dt>
                        <dd className="text-right">
                            {item.price}
                        </dd>
                    </AnimatedWrap>
                ))}
            </dl>
        </div>
    )
}