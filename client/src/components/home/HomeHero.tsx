import "./HomeHero.css";
import {Link} from "react-router";

export default function HomeHero() {
    return (
        <div className="home-hero__wrapper">
        <div className="home-hero">
            <h1 className="home-hero__caption">Почини меня, Нолик!</h1>
            <p className="home-hero__text">Ремонтная мастерская нового поколения: быстрая диагностика без лишней мороки. Гарантированный возврат средств при наличии проблем.</p>
            <div className="home-hero__button-wrapper">
                <Link to="/login" className="home-hero__button home__button-login">Войти в аккаунт</Link>
                <Link to="/register" className="home-hero__button home__button-register">Зарегистрироваться</Link>
            </div>
        </div>
        </div>
    )
}