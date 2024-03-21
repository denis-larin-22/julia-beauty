import { IServiceItem } from "../../lib/types/definitions";
import AnimatedWrap from "../common/animated-wrap";

interface IProps {
    item: IServiceItem,
    index: number
}

export default function ServicesItem({ item, index }: IProps) {
    return (
        <AnimatedWrap
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
    )
};