import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
    CustomSpeed_Field,
    CustomItemSize_Field,
    CustomGap_Field,
    CustomBorder_Field,
    CustomPadding_Field,
} from "../../../layouts";
import { Form, Button } from "../../../components";

export default function Settings_Form() {
    const [toggle, setToggle] = useState(false);

    const toggleForm = () => {
        setToggle((prevState) => !prevState);
    };

    return (
        <Form className={`right-16 top-0 ${toggle ? "translate-y-0" : "-translate-y-full"}`}>
            <fieldset className="flex flex-col sm:grid sm:grid-cols-[auto_auto] sm:gap-4">
                <legend className="hidden">Customization</legend>
                <CustomSpeed_Field />
                <CustomItemSize_Field />
                <CustomGap_Field />
                <CustomBorder_Field />
                <CustomPadding_Field />
            </fieldset>
            <Button
                className="absolute top-full right-0 rounded-t-none border-none bg-inherit"
                title="Preparation"
                onClick={toggleForm}
            >
                <FontAwesomeIcon icon={faGear} />
            </Button>
        </Form>
    );
}
