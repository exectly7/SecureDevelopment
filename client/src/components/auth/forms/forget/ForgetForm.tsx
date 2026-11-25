import AuthFormField from "../AuthFormField.tsx";
import {useState} from "react";

export default function ForgetForm() {
    const [email, setEmail] = useState("");

    return (
        <form className="auth-form">
            <AuthFormField value={email} setValue={setEmail} label="Электронная почта"></AuthFormField>

            <button className="auth-form__submit-button">Зарегистрироваться</button>
        </form>
    )
}