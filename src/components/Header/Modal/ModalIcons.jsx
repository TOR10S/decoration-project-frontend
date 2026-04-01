import React from 'react'
import css from "./ModalIcons.module.css";
export default function ModalIcons() {
  return (
<div className={css.modalIcons}>
        <ul className={css.modalIconsList}>
          <li className={css.modalIconItem}>
            <a href="" className={css.modalIconLink}>
              <svg width="20" height="20" className={css.modalLinkIcon}>
                <use href="/img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={css.modalIconItem}>
            <a href="" className={css.modalIconLink}>
              <svg width="20" height="20" className={css.modalLinkIcon}>
                <use href="/img/icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </li>
          <li className={css.modalIconItem}>
            <a href="" className={css.modalIconLink}>
              <svg width="20" height="20" className={css.modalLinkIcon}>
                <use href="/img/icons.svg#icon-phone"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
  )
}
