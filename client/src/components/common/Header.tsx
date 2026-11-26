import "./Header.css";
import {Link} from "react-router";
import ProfileInfo from "./ProfileInfo.tsx";

export type LinkButton = {
    label: string;
    url: string;
}

export default function Header({buttons}: { buttons: LinkButton[] }) {
    const buttonElements = buttons.map((button) => (
        <Link to={button.url} key={button.url} className="header__navigation-link">{button.label}</Link>
    ));

    return (
        <header className="header">
            <p className="header__logo">Мастерская у Дедуса</p>

            <nav className="header__navigation-block">
                {...buttonElements}
            </nav>

            {/*<div className="header__profile-block">*/}
                <ProfileInfo/>
            {/*</div>*/}
        </header>
    )
}