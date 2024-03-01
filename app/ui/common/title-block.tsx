interface IProps {
    title: string
}

const TitleBlock = ({ title }: IProps) => {
    return (
        <div className="mt-10 md:mt-20 flex items-center justify-center">
            <h1 className="max-w-[80vw] md:max-w-[50vw] w-full py-5 md:py-10 text-center text-white text-t-xxl border-y-2 border-t-gray after:block after:w-28 after:mt-2 after:h-1 after:bg-t-brown flex flex-col items-center justify-center">{title}</h1>
        </div>
    )
}

export default TitleBlock;