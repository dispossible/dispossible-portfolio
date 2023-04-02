import Navigation from "@/components/Navigation";
import useAnimationFrame from "@/lib/useAnimationFrame";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import { useRouter } from "next/router";

const font = Roboto_Mono({ subsets: ["latin"], weight: ["400"], display: "fallback" });

const updateScrollPosition = () => {
    const height = document.body.offsetHeight - window.innerHeight;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    window.document.body.style.setProperty("--scroll-position", `${scroll}px`);
    window.document.body.style.setProperty("--scroll-position-end", `${height - scroll}px`);
};

export default function App({ Component, pageProps }: AppProps) {
    useAnimationFrame(updateScrollPosition);
    const route = useRouter();
    return (
        <div className={font.className}>
            <Navigation isHomePage={route.route === "/"} />
            <Component {...pageProps} />
        </div>
    );
}
