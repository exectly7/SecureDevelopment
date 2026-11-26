import "../AuthForm.css";
import {Link, useNavigate} from "react-router";
import {type SubmitEvent, useState} from "react";
import AuthFormField from "../AuthFormField.tsx";
import useRegister from "../../../../hooks/auth/useRegister.ts";
import RegisterPasswordInput from "./RegisterPasswordInput.tsx";
import {getPasswordChecks} from "./validateRegisterPassword.ts";
import RegisterPasswordChecker from "./RegisterPasswordChecker.tsx";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const [showPasswords, setShowPasswords] = useState(false);

    const {submit, state} = useRegister();
    const navigate = useNavigate();

    const passwordChecks = getPasswordChecks(password, passwordRepeat);
    const isPasswordValid = passwordChecks.filter(check => !check.passed).length === 0;

    async function handleRegister(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isPasswordValid || state.status === "pending") {
            return;
        }

        let isSuccessful = await submit({email, password});

        if (isSuccessful) {
            const query = new URLSearchParams({email});
            navigate(`/code?${query}`, { replace: true });
        }
    }

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <AuthFormField value={email} setValue={setEmail} label="Электронная почта" type="email"></AuthFormField>

            <RegisterPasswordInput password={password} passwordRepeat={passwordRepeat} setPassword={setPassword}
                                   setPasswordRepeat={setPasswordRepeat} showPassword={showPasswords}/>

            <label>
                <input className="auth-form__checkbox" type="checkbox"
                       checked={showPasswords} onChange={(e) => setShowPasswords(e.target.checked)}/>
                Показать пароли
            </label>

            <RegisterPasswordChecker checks={passwordChecks}/>

            {state.status === "error" && <label className="auth-form__error-message">{state.message}</label>}

            <button className="auth-form__submit-button"
                    disabled={!isPasswordValid || state.status === "pending"}>Зарегистрироваться
            </button>

            <div className="auth-form__link-block">
                <Link to="/login" className="auth-form__link">Уже есть аккаунт?</Link>
            </div>
        </form>
    )
}
