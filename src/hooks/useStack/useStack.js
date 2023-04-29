import useItem from "./useItem/useItem";
import useIndex from "./useIndex/useIndex";
import usePointers from "./usePointers/usePointers";
import { useDispatch, useSelector } from "react-redux";
import { generalActions } from "../../store";

export default function useStack() {
    const dispatch = useDispatch();
    const animateItem = useItem();
    const animateIndex = useIndex();
    const animatePointers = usePointers();

    const { transitionDuration } = useSelector((state) => state.general);
    const length = useSelector((state) => state.stack.length);

    const stackPush = () => {
        dispatch(generalActions.startAnimation());

        animateItem("push");
        animateIndex("push");
        animatePointers("push");

        setTimeout(() => {
            dispatch(generalActions.endAnimation());
        }, 2 * transitionDuration);
    };

    const stackPop = () => {
        dispatch(generalActions.startAnimation());

        animateItem("pop");
        animateIndex("pop");
        animatePointers("pop");

        setTimeout(() => {
            dispatch(generalActions.endAnimation());
        }, 2 * transitionDuration);
    };

    const stackInsert = () => {
        dispatch(generalActions.startAnimation());

        animateItem("insert");
        animateIndex("insert");
        animatePointers("insert");
    };

    const stackClear = () => {
        dispatch(generalActions.startAnimation());

        animateItem("clear");
        animatePointers("clear");
        animateIndex("clear");

        setTimeout(() => {
            dispatch(generalActions.endAnimation());
        }, 2 * transitionDuration * length);
    };

    return [stackPush, stackPop, stackInsert, stackClear];
}
