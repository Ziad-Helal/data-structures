/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        height: {
            0: "0",
            "3/4": "75%",
            screen: "100svh",
            full: "100%",
            fit: "fit-content",
        },
        minHeight: {
            0: "0",
            "3/4": "75%",
            screen: "100svh",
            full: "100%",
            fit: "fit-content",
        },
        maxHeight: {
            0: "0",
            "3/4": "75%",
            screen: "100svh",
            full: "100%",
            fit: "fit-content",
        },
        extend: {
            colors: {
                palette_1: "var(--palette-color-1)",
                palette_2: "var(--palette-color-2)",
                palette_3: "var(--palette-color-3)",
                palette_4: "var(--palette-color-4)",
                palette_5: "var(--palette-color-5)",
                palette_6: "var(--palette-color-6)",
            },
        },
    },
    plugins: [],
};
