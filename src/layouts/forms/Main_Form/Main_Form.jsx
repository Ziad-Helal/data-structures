import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
    DataStructures_Filed,
    Size_Field,
    Operations_Field,
    NewItem_Field,
    Position_Field,
    Using_Field,
} from "../../../layouts";
import { Form, Button } from "../../../components";
import { useStack } from "../../../hooks";

export default function Main_Form() {
    const [toggle, setToggle] = useState(true);
    const [stackPush, stackPop, stackInsert, stackClear] = useStack();
    const { size, length } = useSelector((state) => state.stack);
    const { dataStructure, operation, isAnimating } = useSelector((state) => state.general);

    const toggleForm = () => {
        setToggle((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (operation === "clear" || operation === "insert") setToggle(false);

        if (isAnimating) alert("Wait for the animation to end!");
        else
            switch (operation) {
                case "push":
                    if (length == size) alert("Stack is Full!");
                    else stackPush();
                    break;

                case "pop":
                    if (length == 0) alert("Stack is empty!");
                    else stackPop();
                    break;

                case "insert":
                    if (length == size) alert("Stack is Full!");
                    else stackInsert();
                    break;

                case "clear":
                    if (length == 0) alert("Stack is already empty!");
                    else stackClear();
                    break;

                default:
                    alert("wrong operation!");
                    break;
            }
    };

    return (
        <Form
            className={`right-4 top-0 ${toggle ? "translate-y-0" : "-translate-y-full"}`}
            onSubmit={submitHandler}
        >
            <fieldset className="flex flex-col sm:grid sm:grid-cols-[auto_auto] sm:gap-4">
                <legend className="hidden">Main Form</legend>
                <DataStructures_Filed />
                {!!dataStructure && <Size_Field />}
                {!!dataStructure && size > 0 && <Operations_Field />}
                {!!dataStructure && (operation === "push" || operation === "insert") && (
                    <NewItem_Field />
                )}
                {!!dataStructure && operation === "insert" && <Position_Field />}
                {!!dataStructure && operation === "insert" && <Using_Field />}
            </fieldset>
            <Button type="submit" className="w-full mt-6 sm:mt-10 sm:text-lg">
                Run
            </Button>
            <Button
                className="absolute top-full right-0 rounded-t-none border-none bg-inherit"
                title="Preparation"
                onClick={toggleForm}
            >
                <FontAwesomeIcon icon={faScrewdriverWrench} />
            </Button>
        </Form>
    );
}
