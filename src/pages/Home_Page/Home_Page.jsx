import { useSelector } from "react-redux";
import { Stack, Queue, Main_Form, Settings_Form } from "../../layouts";

export default function Home_Page() {
    const { dataStructure, operation } = useSelector((state) => state.general);
    const size = useSelector((state) => state.stack.size);

    return (
        <main className="min-h-screen flex flex-col gap-28 items-center justify-center">
            <Settings_Form />
            <Main_Form />
            {dataStructure === "stack" && size > 0 && <Stack />}
            {dataStructure === "queue" && <Queue />}
            {operation === "insert" && <Stack temp />}
        </main>
    );
}
