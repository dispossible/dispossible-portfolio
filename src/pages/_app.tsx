import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={font.className}>
            <Component {...pageProps} />
        </div>
    );
}
