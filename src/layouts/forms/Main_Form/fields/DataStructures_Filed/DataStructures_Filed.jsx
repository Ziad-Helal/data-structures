import { useRef } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";
import dataStructures from "../../../../../assets/options";

export default function DataStructures_Filed() {
    const dispatch = useDispatch();
    const dataStructureRef = useRef();

    const changeHandler = () => {
        dispatch(generalActions.changeDataStructure(dataStructureRef.current.value));
    };

    return (
        <InputField
            label="Data Structure"
            type="select"
            ref={dataStructureRef}
            id="dataStructures"
            required
            onChange={changeHandler}
        >
            <option value="">--- Choose a Data Structure ---</option>
            {dataStructures.map(({ name, disabled }) => (
                <option key={name.split(" ").join("_")} disabled={disabled}>
                    {name}
                </option>
            ))}
        </InputField>
    );
}
