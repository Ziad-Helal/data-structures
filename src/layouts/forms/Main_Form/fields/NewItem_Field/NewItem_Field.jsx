import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";

export default function NewItem_Field() {
    const dispatch = useDispatch();
    const newItemRef = useRef();

    const operation = useSelector((state) => state.general.operation);

    const changeHandler = () => {
        if (operation === "insert")
            dispatch(generalActions.changeNewItem(newItemRef.current.value));
        else dispatch(generalActions.changeTempItem(newItemRef.current.value));
    };

    return (
        <InputField
            label="New Item"
            type="number"
            ref={newItemRef}
            id="newItem"
            placeholder="what is the new item?"
            min={-999}
            max={999}
            required
            onChange={changeHandler}
        />
    );
}
