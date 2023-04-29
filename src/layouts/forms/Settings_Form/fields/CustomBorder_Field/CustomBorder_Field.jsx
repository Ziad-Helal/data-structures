import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";

export default function CustomBorder_Field() {
    const dispatch = useDispatch();
    const containerBorderRef = useRef();

    const containerBorder = useSelector((state) => state.general.containerBorder);

    const changeHandler = () => {
        dispatch(
            generalActions.changeContainerBorder(Number(containerBorderRef.current.value) / 8)
        );
    };

    return (
        <InputField
            label="Container's Border"
            type="range"
            ref={containerBorderRef}
            id="customBorder"
            defaultValue={(containerBorder * 8).toString()}
            min={0.125 * 8}
            max={1 * 8}
            onChange={changeHandler}
        />
    );
}
