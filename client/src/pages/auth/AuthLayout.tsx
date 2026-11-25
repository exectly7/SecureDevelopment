import {Link, Outlet} from "react-router";
import "./AuthLayout.css";

export default function AuthLayout() {
    return (
        <div className="auth-layout">
            <div className="auth-layout__wrapper">
                <Link to="/" className="auth-layout__back-link">Вернуться назад</Link>
                <div className="auth-layout__card">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}