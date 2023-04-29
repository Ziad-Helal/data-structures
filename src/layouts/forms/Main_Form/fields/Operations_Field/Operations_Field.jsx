import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";
import dataStructures from "../../../../../assets/options";

export default function Operations_Field() {
    const dispatch = useDispatch();
    const operationRef = useRef();
    const { dataStructure, operation } = useSelector((state) => state.general);

    const changeHandler = () => {
        dispatch(generalActions.changeOperation(operationRef.current.value));
    };

    return (
        <InputField
            label="Operation"
            type="select"
            ref={operationRef}
            id="operations"
            defaultValue={operation}
            required
            onChange={changeHandler}
        >
            <option value="">---- Choose an Operation ----</option>
            {dataStructures.map((item) => {
                if (item.name === dataStructure)
                    return item.operations.map(({ name, disabled }) => (
                        <option key={name} disabled={disabled}>
                            {name}
                        </option>
                    ));
            })}
        </InputField>
    );
}
