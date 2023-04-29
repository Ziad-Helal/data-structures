import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";

export default function CustomItemSize_Field() {
    const dispatch = useDispatch();
    const itemWidthRef = useRef();

    const itemWidth = useSelector((state) => state.general.itemWidth);

    const changeHandler = () => {
        dispatch(generalActions.changeItemWidth(Number(itemWidthRef.current.value) / 2));
    };

    return (
        <InputField
            label="Item Size"
            type="range"
            ref={itemWidthRef}
            id="customItemSize"
            defaultValue={(itemWidth * 2).toString()}
            min={1.5 * 2}
            max={6 * 2}
            onChange={changeHandler}
        />
    );
}
