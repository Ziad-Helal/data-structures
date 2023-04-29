import { useSelector } from "react-redux";

export default function useIndex() {
    const transitionDuration = useSelector((state) => state.general.transitionDuration);
    const length = useSelector((state) => state.stack.length);

    const animateIndex = (operation) => {
        switch (operation) {
            case "push":
                const lastIndexCell = document.getElementById(`index-${length}`);
                lastIndexCell.style.opacity = "1";
                break;

            case "pop":
                setTimeout(() => {
                    const lastIndexCell = document.getElementById(`index-${length - 1}`);
                    lastIndexCell.style.opacity = "0";
                }, transitionDuration);
                break;

            case "insert":
                console.log("Index Insert");
                break;

            case "clear":
                setTimeout(() => {
                    let lastIndex = length - 1;
                    const clear = () => {
                        const lastIndexCell = document.getElementById(`index-${lastIndex}`);
                        lastIndexCell.style.opacity = "0";

                        setTimeout(() => {
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

    return animateIndex;
}
