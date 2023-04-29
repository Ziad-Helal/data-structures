import { forwardRef } from "react";

function Form({ children = "Form", className = "", onSubmit = () => {} }, ref) {
    return (
        <form
            ref={ref}
            className={`absolute p-4 sm:py-8 w-3/4 sm:w-fit bg-palette_4 rounded-bl-2xl z-10 ${className}`}
            style={{ transitionProperty: "transform", transitionDuration: "500ms" }}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}

export default forwardRef(Form);
