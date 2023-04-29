import { useSelector } from "react-redux";
import { Item } from "../../components";

export default function Variable({
    name = "temp",
    left = "unset",
    top = "unset",
    tempItem = null,
}) {
    const { itemWidth, pointerWidth, variableWidth, containerPadding } = useSelector(
        (state) => state.general
    );

    return (
        <p
            className="
                absolute bg-palette_2 rounded-lg text-center
                after:w-1 after:bg-palette_2 after:h-3/4 after:absolute after:top-full after:left-[1.375rem] after:rounded-b-full
            "
            style={{
                width: `${pointerWidth}rem`,
                left: left,
                top: top,
            }}
        >
            {name}
            {tempItem && (
                <Item
                    temp
                    top={`calc(${containerPadding}rem - ${top})`}
                    left={`${variableWidth / 2 - itemWidth / 2}rem`}
                >
                    {tempItem}
                </Item>
            )}
        </p>
    );
}
