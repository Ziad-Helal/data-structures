import { useDispatch, useSelector } from "react-redux";
import { generalActions, stackActions } from "../../../store";

export default function useItem() {
    const dispatch = useDispatch();

    const { tempItem, transitionDuration, itemWidth, itemsGap, containerPadding, containerBorder } =
        useSelector((state) => state.general);
    const { length, tempLength, size } = useSelector((state) => state.stack);

    const animateItem = (operation) => {
        switch (operation) {
            case "push":
                dispatch(generalActions.changePosition(length));
                dispatch(generalActions.changeTempItem(tempItem));
                setTimeout(() => {
                    const newItem = document.getElementById(`newItem-${length}`);
                    newItem.style.transitionDuration = `${transitionDuration}ms`;
                    setTimeout(() => {
                        newItem.style.left = `${
                            containerPadding + (itemWidth + itemsGap) * length
                        }rem`;
                    }, transitionDuration);
                    setTimeout(() => {
                        newItem.style.transitionDuration = "0ms";
                        dispatch(stackActions.push(tempItem));
                    }, 2 * transitionDuration);
                }, 0);
                break;

            case "pop":
                {
                    const lastItem = document.getElementById(`item-${length - 1}`);
                    lastItem.style.transitionDuration = `${transitionDuration}ms`;
                    lastItem.style.transform = `translateX(${
                        (itemWidth + itemsGap) * (size - length + 3) - itemsGap
                    }rem)`;
                    setTimeout(() => {
                        lastItem.style.transitionDuration = "0ms";
                        dispatch(generalActions.changeTempItem(lastItem.innerText));
                        dispatch(stackActions.pop());
                    }, transitionDuration);
                }
                break;

            case "insert":
                {
                    const stack = document.getElementById("stack");
                    const tempStack = document.getElementById("tempStack");
                    const lastItem = stack.querySelector(`#item-${length - 1}`);

                    lastItem.style.transitionDuration = `${transitionDuration}ms`;
                    lastItem.style.transform = `translateX(${
                        (itemWidth + itemsGap) * (size - length + 3) - itemsGap
                    }rem)`;
                    setTimeout(() => {
                        lastItem.style.transitionDuration = "0ms";
                        dispatch(generalActions.changeTempItem(lastItem.innerText));
                        dispatch(stackActions.pop());
                    }, transitionDuration);
                    setTimeout(() => {
                        const newItem = document.getElementById(`newItem-${length}`);
                        newItem.style.transitionDuration = `${transitionDuration}ms`;
                        newItem.style.transform = `translateY(${
                            7 + itemWidth + (containerPadding + containerBorder) * 2
                        }rem)`;
                    }, 2 * transitionDuration);
                    setTimeout(() => {
                        const newItem = document.getElementById(`newItem-${length}`);
                        newItem.style.transform = `translate(-${
                            (itemWidth + itemsGap) * 2 +
                            (itemWidth + itemsGap) * (size - tempLength) -
                            itemsGap
                        }rem, ${7 + itemWidth + (containerPadding + containerBorder) * 2}rem)`;
                    }, 3 * transitionDuration);
                }
                break;

            case "clear":
                let lastIndex = length - 1;
                const clear = () => {
                    const lastItem = document.getElementById(`item-${lastIndex}`);
                    lastItem.style.transitionDuration = `${transitionDuration}ms`;
                    lastItem.style.opacity = "0";

                    setTimeout(() => {
                        lastItem.style.transitionDuration = "0ms";
                    }, transitionDuration);

                    setTimeout(() => {
                        dispatch(stackActions.pop());
                        lastIndex--;
                        if (lastIndex >= 0) clear();
                    }, 2 * transitionDuration);
                };

                clear();
                break;

            default:
                break;
        }
    };

    return animateItem;
}
