import css from "./PortfolioItem.module.css";

export default function PortfolioItem({imgLink, title}) {
  return (
    <li className={css.portfolioItem}>
          <a href="">
          <img src={imgLink} alt="" />
          <h3>{title}</h3>
        </a>
    </li>
  )
}
