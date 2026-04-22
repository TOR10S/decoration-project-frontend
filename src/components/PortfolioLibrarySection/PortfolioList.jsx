import React from 'react'
import PortfolioCard from './PortfolioCard'
import css from "./PortfolioList.module.css";
export default function PortfolioList({ portfolio, onItemClick }) {
  return (
    <ul className={css.portfolioList}>
      {portfolio.map((item) => (
        <PortfolioCard 
          key={item._id} 
          theme={item.theme} 
          colors={item.colors} 
          images={item.images} 
          onClick={() => onItemClick(item)} 
        />
      ))}
    </ul>
  );
}