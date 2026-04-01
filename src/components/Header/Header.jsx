import Icons from "./Icons.jsx";
import NavList from "./NavList";
import css from "./Header.module.css"
import clsx from "clsx";
import { useState } from "react";
import ModalSection from "./Modal/ModalSection.jsx";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)  

    return <header className={css.headerSection}>
    <div className={clsx(css.headerContainer, "container")}>
      <nav className={css.headerNav}>
        <a href="/" className={css.logo}>
          <img srcset="/img/Logo-1x.png 1x, /img/Logo-2x.png 2x" width="120" alt="" className={css.logoImg} />
        </a>
       <NavList/>
      </nav>
    <Icons/>
      <button className={css.headerBtn} onClick={() => {setIsOpen(prev => !prev)}}>
        <svg className={css.headerIcon} width="24" height="24">
          <use href="/img/icons.svg#icon-menu" ></use>
        </svg>
      </button>
    <ModalSection onClose={() => {setIsOpen(prev => !prev)}} isOpen={isOpen}/>
    </div>
    </header>
}