import {useState} from "react";
import HttpError from "../../scripts/api/httpError.ts";
import {login, type LoginData} from "../../scripts/auth/login.ts";


type LoginState =
    | { status: 'idle' }
    | { status: 'pending' }
    | { status: 'success' }
    | { status: 'error'; message: string }

export default function useLogin() {
    const [state, setState] = useState<LoginState>({status: 'idle'});

    async function submit(data: LoginData) {
        setState({status: 'pending'});

        try {
            // TODO: dont lose reposnse and get JWT here
            await login(data)

            setState({status: 'success'});
            return true;
        } catch (err) {
            let errorMessage = 'Непредвиденная ошибка, попробуйте снова';

            if (err instanceof HttpError) {
                switch (err.status) {
                    case 400:
                        errorMessage = "Проверьте почту и пароль";
                        break;
                    default:
                        break;
                }
            }

            setState({status: 'error', message: errorMessage});
        }
    }

    return {submit, state};
}