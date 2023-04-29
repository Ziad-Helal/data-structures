import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";

export default function Position_Field() {
    const dispatch = useDispatch();
    const positionRef = useRef();
    const length = useSelector((state) => state.stack.length);

    const changeHandler = () => {
        dispatch(generalActions.changePosition(positionRef.current.value));
    };

    return (
        <InputField
            label="Position"
            type="number"
            ref={positionRef}
            id="position"
            placeholder="Enter the index of the new item"
            min={0}
            max={length}
            required
            onChange={changeHandler}
        />
    );
}
