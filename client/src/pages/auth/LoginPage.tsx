import LoginForm from "../../components/auth/forms/login/LoginForm.tsx";

export default function LoginPage() {
    return (
        <>
            <h1 className="auth-page__caption">Войти в аккаунт</h1>
            <LoginForm />
        </>
    )
}