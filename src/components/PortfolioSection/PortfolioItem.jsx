import { Link } from 'react-router-dom';
import css from "./PortfolioItem.module.css";

export default function PortfolioItem({ title, number }) {

  const categoryMap = {
    "Фотозони": "Фотозона",
    "Диво куля": "Диво куля",
    "Гендер-паті": "Гендер-паті"
  };

  const filterValue = categoryMap[title] || title;

  return (
    <li className={css.portfolioItem}>
      <Link 
        to={`/portfolio?type=${encodeURIComponent(filterValue)}`}
        className={css.portfolioLink}
      >
        <h3>{title}</h3>

        <div className={css.portfolioItemWrapper}>
          <picture>
            <img 
              srcSet={`/img/Portfolio/Portfolio${number}-1x.jpg 1x, /img/Portfolio/Portfolio${number}-2x.jpg 2x`} 
              src={`/img/Portfolio/Portfolio${number}-1x.jpg`} 
              alt={title} 
            />
          </picture>
        </div>
      </Link>
    </li>
  );
}