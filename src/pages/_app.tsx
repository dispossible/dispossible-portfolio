import Navigation from "@/components/Navigation";
import useScroll from "@/lib/useScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import { useRouter } from "next/router";

const font = Roboto_Mono({ subsets: ["latin"], weight: ["400"], display: "fallback" });

const updateScrollPosition = (e: Event) => {
    window.document.body.style.setProperty("--scroll-position", `${window.scrollY}px`);
    const height = window.document.body.getBoundingClientRect().height - window.innerHeight;
    window.document.body.style.setProperty("--scroll-position-end", `${height - window.scrollY}px`);
};

export default function App({ Component, pageProps }: AppProps) {
    useScroll(updateScrollPosition);
    const route = useRouter();
    return (
        <div className={font.className}>
            <Navigation isHomePage={route.route === "/"} />
            <Component {...pageProps} />
        </div>
    );
}
