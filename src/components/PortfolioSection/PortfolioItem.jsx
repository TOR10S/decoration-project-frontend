import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilterType } from '../../redux/portfolioSlice';
import css from "./PortfolioItem.module.css";

export default function PortfolioItem({ title, number }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirect = (e) => {
    e.preventDefault();
    

    const categoryMap = {
      "Фотозони": "Фотозона",
      "Диво куля": "Диво куля",
      "Гендер-паті": "Гендер паті"
    };

    const filterValue = categoryMap[title] || title;

    dispatch(setFilterType(filterValue));
    navigate('/portfolio');
  };

  return (
    <li className={css.portfolioItem}>
      <a href="/portfolio" onClick={handleRedirect}>
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
      </a>
    </li>
  );
}