import React from 'react';
import css from "./Pagination.module.css";
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className={css.paginationWrapper}>
      <button
      className={css.paginationBtn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </button>

      <span style={{ margin: "0 10px" }}>
        {currentPage} / {totalPages}
      </span>

      <button
      className={css.paginationBtn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперед
      </button>
    </div>
  );
}