export default function imageLoader({ src, width, quality }) {
    const params = new URLSearchParams();
    params.set("url", src);
    params.set("w", width.toString());
    params.set("q", (quality || 75).toString());
    return `/.netlify/images?${params}`;
}
