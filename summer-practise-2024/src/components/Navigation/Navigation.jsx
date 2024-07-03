import "./Navigation.css"

import { useLocation } from "@solidjs/router";

export default function Navigation() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__list-item">
                    <a class={`nav__link link ${isActive("/software") ? "link_active" : ""}`} href="/software">ПО</a>
                </li>
                <li class="nav__list-item">
                    <a class={`nav__link link ${isActive("/technical-means") ? "link_active" : ""}`} href="/technical-means">Технические средства</a>
                </li>
                <li class="nav__list-item">
                    <a class={`nav__link link ${isActive("/request") ? "link_active" : ""}`} href="/request">Заявки</a>
                </li>
                <li class="nav__list-item">
                    <a class={`nav__link link ${isActive("/building") ? "link_active" : ""}`} href="/building">Помещение</a>
                </li>
                <li class="nav__list-item">
                    <a class={`nav__link link ${isActive("/employees") ? "link_active" : ""}`} href="/employees">Сотрудники</a>
                </li>
                <li class="nav__list-item">
                    <a class={`nav__link link ${isActive("/disciplines") ? "link_active" : ""}`} href="/disciplines">Назначения</a>
                </li>
            </ul>
        </nav>
    );
}