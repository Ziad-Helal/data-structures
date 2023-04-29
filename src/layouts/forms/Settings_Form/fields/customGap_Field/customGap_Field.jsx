import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";

export default function CustomGap_Field() {
    const dispatch = useDispatch();
    const itemsGapRef = useRef();

    const itemsGap = useSelector((state) => state.general.itemsGap);

    const changeHandler = () => {
        dispatch(generalActions.changeItemsGap(Number(itemsGapRef.current.value) / 8));
    };

    return (
        <InputField
            label="Gap Between Items"
            type="range"
            ref={itemsGapRef}
            id="customGap"
            defaultValue={(itemsGap * 8).toString()}
            min={0.125 * 8}
            max={1 * 8}
            onChange={changeHandler}
        />
    );
}
