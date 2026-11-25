import CodeForm from "../../components/auth/forms/code/CodeForm.tsx";
import {useNavigate, useSearchParams} from "react-router";

export default function CodePage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');

    if (!email) {
        navigate('/');
    }

    return (
        <>
            <h1 className="auth-page__caption">Введите код</h1>
            <CodeForm email={email}/>
        </>
    )
}