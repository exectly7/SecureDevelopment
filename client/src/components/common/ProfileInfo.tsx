import "./ProfileInfo.css"
import {Link} from "react-router";

export default function ProfileInfo() {
    return (
        <div className="profile-info">
            <Link to="/login" className="profile-info__button">
                Войти
            </Link>
        </div>
    )
}