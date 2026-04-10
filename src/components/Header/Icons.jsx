import css from "./Icons.module.css"

export default function Icons() {
  return (
    <div className={css.addressInfo}>
        <ul className={css.addressList}>
          <li className={css.headerIconItem}>
            <a href="https://instagram.com/vo.decor" target="_blank" className={css.headerIconLink}>
              <svg width="20" height="20" className={css.headerLinkIcon}>
                <use href="/img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={css.headerIconItem}>
            <a href="https://t.me/vodecor" target="_blank" className={css.headerIconLink}>
              <svg width="20" height="20" className={css.headerLinkIcon}>
                <use href="/img/icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </li>
          <li className={css.headerIconItem}>
            <a href="tel:+380931429657" className={css.headerIconLink}>
              <svg width="20" height="20" className={css.headerLinkIcon}>
                <use href="/img/icons.svg#icon-phone"></use>
              </svg>
            </a>
          </li>
      </ul>
    </div>
  )
}