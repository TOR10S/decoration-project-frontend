import css from "./Icons.module.css"

export default function Icons() {
  return (
    <div className={css.addressInfo}>
        <ul className={css.addressList}>
          <li className={css.headerIconItem}>
            <a href="" className={css.headerIconLink}>
              <svg width="20" height="20" className={css.headerLinkIcon}>
                <use href="/img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={css.headerIconItem}>
            <a href="" className={css.headerIconLink}>
              <svg width="20" height="20" className={css.headerLinkIcon}>
                <use href="/img/icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </li>
          <li className={css.headerIconItem}>
            <a href="" className={css.headerIconLink}>
              <svg width="20" height="20" className={css.headerLinkIcon}>
                <use href="/img/icons.svg#icon-phone"></use>
              </svg>
            </a>
          </li>
      </ul>
    </div>
  )
}