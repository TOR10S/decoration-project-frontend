import React from 'react';
import css from "./PortfolioFilters.module.css";

export default function PortfolioFilters({
  typeValue,
  colorValue,
  themeValue,
  setTypeOfDecoration,
  setColors,
  setTheme,
  onSearch
}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className={css.portfolioFilters} onSubmit={handleSubmit}>
      <p>Оберіть фільтри</p>

      <div className={css.portfolioFiltersWrapper}>

        <select
          id="typeOfDecoration"
          value={typeValue}
          onChange={(e) => setTypeOfDecoration(e.target.value)}
          className={css.inputField}
        >
          <option value="">Всі</option>
          <option value="Фотозона">Фотозона</option>
          <option value="Диво куля">Диво куля</option>
          <option value="Гендер-паті">Гендер-паті</option>
        </select>

        <input
          id="color"
          className={css.inputField}
          type="text"
          value={colorValue}
          placeholder="Колір (напр. рожевий)"
          onChange={(e) => setColors(e.target.value)}
        />

        <input
          id="theme"
          className={css.inputField}
          type="text"
          value={themeValue}
          placeholder="Тематика (напр. День народження)"
          onChange={(e) => setTheme(e.target.value)}
        />

      </div>

      <button
        type="submit"
        className={css.searchBtn}
      >
        Пошук
      </button>
    </form>
  );
}