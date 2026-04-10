import React from 'react'
import FooterIcons from './FooterIcons.jsx'
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <svg className={css.footerSvg}>
            <use href='/img/icons.svg#footer'></use>
        </svg>
        <div className={css.footerLogoWrapper}>
        <img srcSet="/img/Logo-1x.png 1x, /img/Logo-2x.png 2x" src='/img/Logo-1x.png' alt="" className={css.footerLogo} />
        <FooterIcons />
        <p className={css.footerText}>я якийсь дофіга крутий фоп і ось там мій код і тд і рік коли я почала працювати і що ще треба </p>
        </div>
        </div>
    </footer>
  )
}
