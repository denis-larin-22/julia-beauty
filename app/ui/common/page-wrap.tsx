// Adds head fixed background (<FixedBackground>), title (<TitleBlock>) and required margin indents 
import FixedBackground from "./fixed-background"
import TitleBlock from "./title-block"

interface IProps {
    children: Readonly<React.ReactNode>,
    srcBackground: string,
    title: string,
    wrapStyles?: string
}

const PageWrap = ({
    children,
    srcBackground,
    title,
    wrapStyles
}: IProps) => {

    return (
        <>
            <FixedBackground srcImage={srcBackground} />
            <TitleBlock title={title} />

            <div className={`bg-white ${wrapStyles} mt-12 md:mt-24`}>
                {children}
            </div>
        </>
    )
}

export default PageWrap;