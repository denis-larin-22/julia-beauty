interface IProps {
    styles?: string,
    title: string
}

const TitleBlock = ({ title, styles }: IProps) => {
    return (
        <div className={`relative max-w-t-maxScreen h-40 sm:h-80 flex items-center justify-center bg-fixed bg-cover bg-center brightness-75 ${styles}`}>
            <p className="max-w-[80vw] md:max-w-[50vw] w-full py-5 md:py-10 text-center text-white text-t-xxl border-y-2 border-t-gray after:block after:w-28 after:mt-2 after:h-1 after:bg-t-brown flex flex-col items-center justify-center">{title}</p>
        </div>
    )
}

export default TitleBlock;