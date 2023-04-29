import { useSelector } from "react-redux";
import { StackIndex } from "../../../layouts";
import { Item, Pointer, Variable } from "../../../components";

export default function Stack({ temp = false }) {
    const { stackItems, tempStackItems, length, tempLength, size } = useSelector(
        (state) => state.stack
    );
    const {
        operation,
        newItem,
        position,
        tempItem,
        isAnimating,
        itemWidth,
        pointerWidth,
        variableWidth,
        itemsGap,
        containerPadding,
        containerBorder,
    } = useSelector((state) => state.general);

    return (
        <section
            id={temp ? "tempStack" : "stack"}
            className="relative border-palette_6 rounded-l-full flex"
            style={{
                width: `${
                    containerBorder + containerPadding + (itemWidth + itemsGap) * size - itemsGap
                }rem`,
                height: `${(containerBorder + containerPadding) * 2 + itemWidth}rem`,
                paddingTop: `${containerPadding}rem`,
                paddingBottom: `${containerPadding}rem`,
                paddingLeft: `${containerPadding}rem`,
                borderRight: "none",
                borderWidth: `${containerBorder}rem`,
                gap: `${itemsGap}rem`,
                right: `${
                    operation === "insert" ? (itemWidth + itemsGap) * 2 : itemWidth + itemsGap
                }rem`,
            }}
        >
            <Pointer
                name="top"
                left={`${
                    containerPadding +
                    itemWidth / 2 -
                    pointerWidth / 2 -
                    (itemWidth + itemsGap) +
                    (itemWidth + itemsGap) * (!temp ? length : tempLength)
                }rem`}
                bottom={`calc(100% + ${containerBorder}rem + 3rem)`}
            />
            <StackIndex temp={temp} />
            {(!temp ? stackItems : tempStackItems).map((item, index) => (
                <Item key={`item-${index}`} index={index}>
                    {item}
                </Item>
            ))}
            {!temp && (
                <Variable
                    top="-3rem"
                    left={`calc(100% + ${
                        (itemWidth + itemsGap) * 2 + itemWidth / 2 - variableWidth / 2
                    }rem)`}
                    tempItem={tempItem}
                />
            )}
            {!temp && isAnimating && (operation === "push" || operation === "insert") && (
                <Item
                    index={position}
                    newItem
                    left={`calc(100% + ${(itemWidth + itemsGap) * 2}rem)`}
                >
                    {tempItem}
                </Item>
            )}
            {!temp && operation === "insert" && (
                <Variable
                    name="item"
                    top="-3rem"
                    left={`calc(100% + ${
                        (itemWidth + itemsGap) * 4 + itemWidth / 2 - variableWidth / 2
                    }rem)`}
                    tempItem={newItem}
                />
            )}
        </section>
    );
}
