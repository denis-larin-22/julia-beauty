import Image from "next/image";

interface IProps {
    srcImage: string
}

const FixedBackground = ({ srcImage }: IProps) => {
    return (
        // <div className={`h-full w-full fixed top-0 left-0 ${srcImage} bg-cover bg-center -z-10 brightness-75`}></div>
        <Image
            width={1920}
            height={500}
            alt="Background image with fixed effect"
            src={srcImage}
            className="h-full w-full fixed top-0 left-0 object-cover -z-10 brightness-75"
        />
    )
}

export default FixedBackground;