export default function Button({
    children = "Button",
    type = "button",
    title = "",
    className = "",
    onClick = () => {},
}) {
    return (
        <button
            type={type}
            title={title}
            className={`px-3.5 py-1 text-palette_2 font-semibold border border-palette_2 hover:border-palette_1 hover:text-palette_1 rounded-lg ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
