import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";

export default function CustomPadding_Field() {
    const dispatch = useDispatch();
    const containerPaddingRef = useRef();

    const containerPadding = useSelector((state) => state.general.containerPadding);

    const changeHandler = () => {
        dispatch(
            generalActions.changeContainerPadding(Number(containerPaddingRef.current.value) / 8)
        );
    };

    return (
        <InputField
            label="Container's Padding"
            type="range"
            ref={containerPaddingRef}
            id="customPadding"
            defaultValue={(containerPadding * 8).toString()}
            min={0.125 * 8}
            max={1 * 8}
            onChange={changeHandler}
        />
    );
}
