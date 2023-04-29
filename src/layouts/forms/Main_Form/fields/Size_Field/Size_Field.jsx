import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { stackActions } from "../../../../../store";

export default function Size_Field() {
    const dispatch = useDispatch();
    const sizeRef = useRef();
    const { length, size } = useSelector((state) => state.stack);
    const isAnimating = useSelector((state) => state.general.isAnimating);

    const changeHandler = () => {
        if (isAnimating) alert("Wait for the animation to end!");
        else dispatch(stackActions.changeSize(sizeRef.current.value));
    };

    return (
        <InputField
            label="Size"
            type="number"
            ref={sizeRef}
            id="size"
            placeholder="Enter the maximum size"
            defaultValue={size > 0 ? size : null}
            min={length > 1 ? length : 1}
            max={10}
            required
            onChange={changeHandler}
        />
    );
}
