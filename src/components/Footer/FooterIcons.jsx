import css from "./FooterIcons.module.css"

export default function FooterIcons() {
  return (
    <div className={css.footerInfo}>
        <ul className={css.footerList}>
          <li className={css.footerIconItem}>
            <a href="" className={css.footerIconLink}>
              <svg width="20" height="20" className={css.footerLinkIcon}>
                <use href="/img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={css.footerIconItem}>
            <a href="" className={css.footerIconLink}>
              <svg width="20" height="20" className={css.footerLinkIcon}>
                <use href="/img/icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </li>
          <li className={css.footerIconItem}>
            <a href="" className={css.footerIconLink}>
              <svg width="20" height="20" className={css.footerLinkIcon}>
                <use href="/img/icons.svg#icon-phone"></use>
              </svg>
            </a>
          </li>
      </ul>
    </div>
  )
}