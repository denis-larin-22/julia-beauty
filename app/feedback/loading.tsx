import { Loader } from "../ui/common/loader";

export default function Loading() {
    return <div className="w-full h-screen flex items-center justify-center">
        <Loader />
    </div>;
}