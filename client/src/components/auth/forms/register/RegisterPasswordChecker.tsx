import type {PasswordCheck} from "./validateRegisterPassword.ts";

export default function RegisterPasswordChecker({checks}: { checks: PasswordCheck[] }) {
    const checkElements = checks.map(check => {
        const type = check.passed ? "register-form__correct-label" : "register-form__error-label";

        return <label key={check.id} className={type}>{check.label}</label>
    });

    return (
        <div className="register-form__check-block">
            {...checkElements}
        </div>
    )
}