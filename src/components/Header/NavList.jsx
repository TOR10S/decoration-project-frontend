import { NavLink } from "react-router-dom"
import css from "./NavList.module.css"

export default function NavList() {
    return (
        <ul className={css.navList}>
      <li className={css.navLink}>
        <NavLink to="/">Головна</NavLink>
      </li>
      <li className={css.navLink}>
        <NavLink to="/portfolio">Каталог</NavLink>
      </li>
        </ul>
    )
}