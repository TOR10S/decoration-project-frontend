import React from 'react';
import css from "./PortfolioCard.module.css";

export default function PortfolioCard({ theme, colors, images, onClick }) {
  const imageUrl = images?.[0]?.url;

  const previewImage = (typeof imageUrl === 'string')
    ? imageUrl.replace('/upload/', '/upload/f_auto,q_auto,w_500/') 
    : "https://via.placeholder.com/500x300?text=No+Photo";

  return (
    <li className={css.cardItem} onClick={onClick}>
      <div className={css.cardWrapper}>
        <img src={previewImage} alt={theme} className={css.img} />
        <h2 className={css.cardTheme}>{theme}</h2>
        <p className={css.cardColors}>{colors}</p>
      </div>
    </li>
  );
}