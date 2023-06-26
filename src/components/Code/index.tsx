import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeProps {
    language: string;
    children: string | string[];
}

export default function Code({ language, children }: CodeProps) {
    return (
        <SyntaxHighlighter language={language} style={a11yDark}>
            {children}
        </SyntaxHighlighter>
    );
}
