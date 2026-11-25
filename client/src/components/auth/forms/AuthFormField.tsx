import type {Dispatch, SetStateAction} from "react";

export default function AuthFormField({value, setValue, label, type="text"}: {label: string, type?: string, value: string, setValue: Dispatch<SetStateAction<string>>}) {
    return (
        <div className="auth-form__field">
            <label className="auth-form__label" htmlFor={label}>{label}</label>
            <input className="auth-form__input" id={label} type={type} value={value}
                   onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}