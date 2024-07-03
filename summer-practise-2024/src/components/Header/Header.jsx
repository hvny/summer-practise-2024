import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header() {
    return (
        <header class="header">
            <a class="header__link link" href="/">
                <img src={logo} alt="Логотип" class="header__logo" />
            </a>
            <Navigation />
        </header>
    );
}