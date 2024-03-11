export default function TextHighlighter({ children }: { children: string }) {
    return (
        <span className="font-bold">{children}</span>
    )
}