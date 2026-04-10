import css from "./FooterIcons.module.css"

export default function FooterIcons() {
  return (
    <div className={css.footerInfo}>
        <ul className={css.footerList}>
          <li className={css.footerIconItem}>
            <a href="https://instagram.com/vo.decor" target="_blank" className={css.footerIconLink}>
              <svg width="20" height="20" className={css.footerLinkIcon}>
                <use href="/img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={css.footerIconItem}>
            <a href="https://t.me/vodecor" target="_blank" className={css.footerIconLink}>
              <svg width="20" height="20" className={css.footerLinkIcon}>
                <use href="/img/icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </li>
          <li className={css.footerIconItem}>
            <a href="tel:+380931429657" className={css.footerIconLink} target="_blank">
              <svg width="20" height="20" className={css.footerLinkIcon}>
                <use href="/img/icons.svg#icon-phone"></use>
              </svg>
            </a>
          </li>
      </ul>
    </div>
  )
}