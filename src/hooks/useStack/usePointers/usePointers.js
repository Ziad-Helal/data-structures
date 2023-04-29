import { useSelector } from "react-redux";

export default function usePointers() {
    const { transitionDuration, itemWidth, pointerWidth, itemsGap, containerPadding } = useSelector(
        (state) => state.general
    );
    const length = useSelector((state) => state.stack.length);

    const animatePointers = (operation) => {
        switch (operation) {
            case "push":
                const pointerTop = document.getElementById("pointer-top");
                pointerTop.style.transitionDuration = `${transitionDuration}ms`;
                pointerTop.style.left = `${
                    containerPadding +
                    itemWidth / 2 -
                    pointerWidth / 2 +
                    (itemWidth + itemsGap) * length
                }rem`;
                setTimeout(() => {
                    pointerTop.style.transitionDuration = "0ms";
                }, transitionDuration);
                break;

            case "pop":
                setTimeout(() => {
                    const pointerTop = document.getElementById("pointer-top");
                    pointerTop.style.transitionDuration = `${transitionDuration}ms`;

                    setTimeout(() => {
                        pointerTop.style.transitionDuration = "0ms";
                    }, 2 * transitionDuration);
                }, transitionDuration);
                break;

            case "insert":
                console.log("Pointers Insert");
                break;

            case "clear":
                setTimeout(() => {
                    const pointerTop = document.getElementById("pointer-top");
                    let lastIndex = length - 1;
                    const clear = () => {
                        pointerTop.style.transitionDuration = `${transitionDuration}ms`;
                        pointerTop.style.left = `${
                            containerPadding +
                            itemWidth / 2 -
                            pointerWidth / 2 +
                            (itemWidth + itemsGap) * (lastIndex - 1)
                        }rem`;

                        setTimeout(() => {
                            pointerTop.style.transitionDuration = "0ms";
                            lastIndex--;
                            if (lastIndex >= 0) clear();
                        }, 2 * transitionDuration);
                    };

                    clear();
                }, transitionDuration);
                break;

            default:
                break;
        }
    };

    return animatePointers;
}
