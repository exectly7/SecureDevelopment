import {type SubmitEvent, useState} from "react";
import {Link, useNavigate} from "react-router";
import AuthFormField from "../AuthFormField.tsx";
import useLogin from "../../../../hooks/auth/useLogin.ts";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const {submit, state} = useLogin();
    const navigate = useNavigate();

    async function handleRegister(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (state.status === "pending") {
            return;
        }

        let isSuccessful = await submit({email, password});

        if (isSuccessful) {
            navigate('/', { replace: true })
        }
    }

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <AuthFormField value={email} setValue={setEmail} label="Электронная почта"></AuthFormField>

            <AuthFormField value={password} setValue={setPassword} label="Пароль" type={showPassword ? "text" : "password"}/>

            <label>
                <input className="auth-form__checkbox" type="checkbox"
                       checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
                Показать пароль
            </label>

            {state.status === "error" && <label className="auth-form__error-message">{state.message}</label>}

            <button className="auth-form__submit-button"
                    disabled={email.length === 0 || password.length === 0 || state.status === "pending"}>Зарегистрироваться
            </button>

            <div className="auth-form__link-block">
                <Link to="/forget" className="auth-form__link">Забыли пароль?</Link>
                <Link to="/register" className="auth-form__link">Нет аккаунта?</Link>
            </div>
        </form>
    )
}