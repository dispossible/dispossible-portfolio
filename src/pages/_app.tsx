import Navigation from "@/components/Navigation";
import useAnimationFrame from "@/lib/useAnimationFrame";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const font = Roboto_Mono({ subsets: ["latin"], weight: ["400"], display: "fallback" });

const updateScrollPosition = () => {
    const height = document.body.offsetHeight - window.innerHeight;
    const scroll = window.scrollY || document.documentElement.scrollTop;
    window.document.body.style.setProperty("--scroll-position", `${scroll}px`);
    window.document.body.style.setProperty("--scroll-position-end", `${height - scroll}px`);
};

export default function App({ Component, pageProps }: AppProps) {
    useAnimationFrame(updateScrollPosition);
    const route = useRouter();
    return (
        <main className={font.className}>
            <Head>
                <title>Dispossible</title>
                <meta name="description" content="Dispossible - Timothy Bailey - Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#232620" />
                <meta name="msapplication-TileColor" content="#232620" />
                <meta name="theme-color" content="#232620" />
            </Head>
            <Navigation isHomePage={route.route === "/"} />
            <Component {...pageProps} />
        </main>
    );
}
