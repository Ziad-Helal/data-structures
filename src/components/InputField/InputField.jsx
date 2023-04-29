import { forwardRef } from "react";

function InputField(
    {
        children,
        label = "",
        hiddenLabel = false,
        type = "text",
        id = "inputField",
        placeholder = "",
        min = null,
        max = null,
        defaultValue = null,
        autoFocus = false,
        disabled = false,
        required = false,
        onChange = () => {},
    },
    ref
) {
    return (
        <>
            {!!label && (
                <label
                    htmlFor={id}
                    className={`text-sm sm:text-base text-palette_1 font-medium flex items-center ${
                        hiddenLabel && "hidden"
                    }`}
                >
                    {label}
                </label>
            )}
            {type === "select" ? (
                <select
                    className="text-sm sm:text-base text-palette_6 bg-palette_1 px-3 py-1 mb-4 sm:mb-0 outline-none border border-palette_5 hover:border-palette_6 rounded-lg capitalize cursor-pointer"
                    ref={ref}
                    name={id}
                    id={id}
                    defaultValue={defaultValue}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    required={required}
                    onChange={onChange}
                >
                    {children}
                </select>
            ) : (
                <input
                    className={`text-sm sm:text-base text-palette_6 bg-palette_1 ${
                        type != "range" ? "px-3" : ""
                    } py-1 mb-4 sm:mb-0 outline-none border border-palette_5 hover:border-palette_6 rounded-lg`}
                    type={type}
                    ref={ref}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    defaultValue={defaultValue}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    required={required}
                    onChange={onChange}
                />
            )}
        </>
    );
}

export default forwardRef(InputField);
