import useScroll from "@/lib/useScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"], weight: ["400"], display: "fallback" });

const updateScrollPosition = (e: Event) => {
    window.document.body.style.setProperty("--scroll-position", `${window.scrollY}px`);
};

export default function App({ Component, pageProps }: AppProps) {
    useScroll(updateScrollPosition);

    return (
        <div className={font.className}>
            <Component {...pageProps} />
        </div>
    );
}
