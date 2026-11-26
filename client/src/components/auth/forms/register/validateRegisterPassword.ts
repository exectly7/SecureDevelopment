export type PasswordCheck = {
    id: string;
    label: string;
    passed: boolean;
}

export function getPasswordChecks(password: string, passwordRepeat: string): PasswordCheck[] {
    return [
        {
            id: 'length',
            label: 'Пароль от 8 символов',
            passed: password.length >= 8 && password.length <= 72,
        },
        {
            id: 'not-blank',
            label: 'Пароль не пустой',
            passed: password.trim().length > 0,
        },
        {
            id: 'match',
            label: 'Пароли совпадают',
            passed: passwordRepeat.length > 0 && password === passwordRepeat,
        },
    ]
}