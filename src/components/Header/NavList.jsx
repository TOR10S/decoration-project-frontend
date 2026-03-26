import css from "./NavList.module.css"

export default function NavList() {
    return (
        <ul className={css.navList}>
      <li className={css.navLink}>
        <a href="">Головна</a>
      </li>
      <li className={css.navLink}>
        <a href="">Каталог</a>
      </li>
        </ul>
    )
}