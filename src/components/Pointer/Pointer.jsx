import { useSelector } from "react-redux";

export default function Pointer({ name = "pointer", left = "unset", bottom = "unset" }) {
    const { transitionDuration, pointerWidth } = useSelector((state) => state.general);

    return (
        <p
            id={`pointer-${name}`}
            className="
                absolute bg-palette_2 rounded-lg text-center
                after:w-1 after:bg-palette_2 after:h-3/4 after:absolute after:top-full after:left-[1.375rem] after:rounded-b-full
            "
            style={{
                width: `${pointerWidth}rem`,
                left: left,
                bottom: bottom,
                // transitionDuration: `${transitionDuration}ms`,
            }}
        >
            {name}
        </p>
    );
}
