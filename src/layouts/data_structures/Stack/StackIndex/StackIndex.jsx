import { useSelector } from "react-redux";

export default function StackIndex({ temp = false }) {
    const { itemWidth, itemsGap, containerPadding, containerBorder } = useSelector(
        (state) => state.general
    );
    const { length, tempLength, size } = useSelector((state) => state.stack);

    const indexes = [];
    const topIndex = !temp
        ? length == size
            ? length - 1
            : length
        : tempLength == size
        ? tempLength - 1
        : tempLength;
    for (let i = -1; i <= topIndex; i++) {
        indexes.push(i);
    }

    return (
        <section
            className="absolute right-0 flex [&>:last-child]:opacity-0"
            style={{
                gap: `${itemsGap}rem`,
                bottom: `calc(100% + ${containerBorder}rem + 0.25rem)`,
                width: `calc(100% + ${itemWidth + itemsGap - containerPadding}rem)`,
            }}
        >
            {indexes.map((index) => (
                <p
                    key={`index-${index}`}
                    id={`index-${index}`}
                    className="text-center"
                    style={{ width: `${itemWidth}rem` }}
                >
                    {index}
                </p>
            ))}
        </section>
    );
}
