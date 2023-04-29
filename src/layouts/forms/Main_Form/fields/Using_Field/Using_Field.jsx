import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";
import dataStructures from "../../../../../assets/options";

export default function Using_Field() {
    const dispatch = useDispatch();
    const tempDataStructureRef = useRef();
    const { dataStructure, operation: currentOperation } = useSelector((state) => state.general);

    const changeHandler = () => {
        dispatch(generalActions.changeTempDataStructure(tempDataStructureRef.current.value));
    };

    return (
        <InputField
            label="Using"
            type="select"
            ref={tempDataStructureRef}
            id="using"
            required
            onChange={changeHandler}
        >
            {dataStructures.map((structure) => {
                if (structure.name === dataStructure)
                    return structure.operations.map((operation) => {
                        if (operation.name === currentOperation)
                            return operation.using.map(({ name, disabled }) => (
                                <option key={name} disabled={disabled}>
                                    {name}
                                </option>
                            ));
                    });
            })}
        </InputField>
    );
}
