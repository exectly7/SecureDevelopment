import RegisterForm from "../../components/auth/forms/register/RegisterForm.tsx";
import "./AuthPage.css";

export default function RegisterPage() {
    return (
        <>
            <h1 className="auth-page__caption">Регистрация</h1>
            <RegisterForm/>
        </>
    )
}