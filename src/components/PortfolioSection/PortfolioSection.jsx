import PortfolioItem from "./PortfolioItem"
import css from "./PortfolioSection.module.css";
const imgs = [{title: "Фотозони", number:"1"},{title: "Диво куля", number:"2"},{title: "Гендер-паті", number:"3"}]
export default function PortfolioSection() {
  return (
    <section className="portfolio-redirect">
      <div className="container">
        <h2 className="header-2">У нас ви можете замовити</h2>
      <ul className={css.portfolioList}>
        {imgs.map(({title, number}) => (
          <PortfolioItem title={title} number={number}/>
        ))}
      </ul>
      </div>
    </section>
  )
}

