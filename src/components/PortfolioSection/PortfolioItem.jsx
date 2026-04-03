import css from "./PortfolioItem.module.css";

export default function PortfolioItem({title, number}) {
  return (
    <li className={css.portfolioItem}>
          <a href="">
            <h3>{title}</h3>
            <div className={css.portfolioItemWrapper}>
              
              <picture>
                <img srcSet={`/img/Portfolio/Portfolio${number}-1x.jpg 1x, /img/Portfolio/Portfolio${number}-2x.jpg 2x`} src={`/img/Portfolio/Portfolio${number}-1x.jpg`} alt={`фото-${number}`}/>
              </picture>
              
            </div>
          
        </a>
    </li>
  )
}
