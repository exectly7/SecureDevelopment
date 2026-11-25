import CodeForm from "../../components/auth/forms/code/CodeForm.tsx";
import {useSearchParams} from "react-router";

export default function CodePage() {
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');

    return (
        <>
            <h1 className="auth-page__caption">Введите код</h1>
            <CodeForm email={email}/>
        </>
    )
}