import {useState} from "react";
import CodeInput from "./CodeInput.tsx";

export default function CodeForm({email}: { email: string }) {
    const [code, setCode] = useState("");

    function handleSendCode() {

    }

    return (
        <form className="auth-form" onSubmit={handleSendCode}>
            <p className="auth-form__label">Проверьте почту {email}</p>

            <CodeInput value={code} setValue={setCode}></CodeInput>

            {/*{state.status === "error" && <label className="auth-form__error-message">{state.message}</label>}*/}

            <button className="auth-form__submit-button"
                    disabled={code.length === 0}>Зарегистрироваться
            </button>

            <div className="auth-form__link-block">
            </div>
        </form>
    )
}