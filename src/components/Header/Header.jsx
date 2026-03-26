import Icons from "./Icons.jsx";
import NavList from "./NavList";
import css from "./Header.module.css"
import clsx from "clsx";
export default function Header() {

    return <header className={css.headerSection}>
    <div className={clsx(css.headerContainer, "container")}>
      <nav className={css.headerNav}>
        <a href="" className={css.logo}>
          <img srcset="/img/Logo-1x.png 1x, /img/Logo-2x.png 2x" width="120" alt="" className={css.logoImg} />
        </a>
       <NavList/>
      </nav>
    <Icons/>
      <button className={css.headerBtn}>
        <svg className={css.headerIcon} width="24" height="24">
          <use href="/img/icons.svg#icon-menu" ></use>
        </svg>
      </button>
    </div>
    </header>
}