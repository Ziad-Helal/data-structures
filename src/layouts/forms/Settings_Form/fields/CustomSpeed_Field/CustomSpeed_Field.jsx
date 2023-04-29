import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../../../../components";
import { generalActions } from "../../../../../store";

export default function CustomSpeed_Field() {
    const dispatch = useDispatch();
    const transitionDurationRef = useRef();

    const transitionDuration = useSelector((state) => state.general.transitionDuration);

    const changeHandler = () => {
        dispatch(
            generalActions.changeTransitionDuration(
                1500 - Number(transitionDurationRef.current.value)
            )
        );
    };

    return (
        <InputField
            label="Animation Speed"
            type="range"
            ref={transitionDurationRef}
            id="customSpeed"
            defaultValue={(1500 - transitionDuration).toString()}
            min={10}
            max={1500}
            onChange={changeHandler}
        />
    );
}
