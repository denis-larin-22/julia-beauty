interface IProps {
    styles: string
}

const FixedBackground = ({ styles }: IProps) => {
    return (
        <div className={`h-full w-full fixed top-0 left-0 ${styles} bg-cover bg-center -z-10 brightness-75`}></div>
    )
}

export default FixedBackground;