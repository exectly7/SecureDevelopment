import {register, type RegisterData} from "../../scripts/auth/register.ts";
import {useState} from "react";
import HttpError from "../../scripts/api/httpError.ts";


type RegisterState =
    | { status: 'idle' }
    | { status: 'pending' }
    | { status: 'success' }
    | { status: 'error'; message: string }

export default function useRegister() {
    const [state, setState] = useState<RegisterState>({status: 'idle'});

    async function submit(data: RegisterData) {
        setState({status: 'pending'});

        try {
            await register(data)

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