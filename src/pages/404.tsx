import ErrorScreen from "@/components/ErrorScreen";

export default function Error404() {
    return <ErrorScreen status={404} message={"This page could not be found"} />;
}
