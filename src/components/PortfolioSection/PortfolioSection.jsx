import PortfolioItem from "./PortfolioItem"

export default function PortfolioSection() {
  return (
    <section class="portfolio-redirect">
      <div class="container">
        <h2 class="header-2">У нас ви можете замовити</h2>
      <ul class="portfolio-list">
        <PortfolioItem title="фотозони"/>
        <PortfolioItem title="дивокуля"/>
        <PortfolioItem title="гендерпаті"/>
      </ul>
      </div>
    </section>
  )
}

