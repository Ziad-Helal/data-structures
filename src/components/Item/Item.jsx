import { useSelector } from "react-redux";

export default function Item({
    children = 0,
    index = -1,
    newItem = false,
    temp = false,
    left = "unset",
    top = "unset",
}) {
    const itemWidth = useSelector((state) => state.general.itemWidth);

    let id;
    if (newItem) id = `newItem-${index}`;
    else if (temp) id = `tempItem`;
    else id = `item-${index}`;

    return (
        <span
            id={id}
            className={`aspect-square bg-palette_3 flex items-center justify-center rounded-full ${
                newItem || temp ? "absolute" : ""
            } ${temp ? "-z-10" : ""}`}
            style={{
                width: `${itemWidth}rem`,
                left: left,
                top: top,
            }}
        >
            {children}
        </span>
    );
}
