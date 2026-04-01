import React from 'react'
import css from "./ModalNavList.module.css";
export default function ModalNavList() {
  return (
          <nav className={css.modalNav}>
        <ul className={css.modalNavList}>
          <li className={css.modalNavListItem}>
            <a className={css.modalNavLink} href="">Головна</a>
          </li>
          <li className={css.modalNavListItem}>
            <a className={css.modalNavLink} href="">Каталог</a>
          </li>
        </ul>
      </nav>
  )
}
