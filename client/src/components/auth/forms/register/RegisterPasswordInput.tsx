import AuthFormField from "../AuthFormField.tsx";

import "./RegisterForm.css";

import type {Dispatch, SetStateAction} from "react";

export default function RegisterPasswordInput({
                                                  password,
                                                  setPassword,
                                                  passwordRepeat,
                                                  setPasswordRepeat,
                                                  showPassword
                                              }: {
    password: string,
    passwordRepeat: string,
    setPassword: Dispatch<SetStateAction<string>>,
    setPasswordRepeat: Dispatch<SetStateAction<string>>,
    showPassword: boolean,
}) {
    return (
        <>
            <AuthFormField value={password} setValue={setPassword} label="Пароль"
                           type={showPassword ? "text" : "password"}></AuthFormField>
            <AuthFormField value={passwordRepeat} setValue={setPasswordRepeat} label="Повторите пароль"
                           type={showPassword ? "text" : "password"}></AuthFormField>
        </>
    )
}