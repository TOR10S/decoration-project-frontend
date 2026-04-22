import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPortfolio } from "../redux/portfolioSlice";

import PortfolioList from "../components/PortfolioLibrarySection/PortfolioList";
import PortfolioFilters from "../components/PortfolioLibrarySection/PortfolioFilters";
import Pagination from "../components/PortfolioLibrarySection/Pagination";
import PhotoModal from "../components/PortfolioLibrarySection/PhotoModal";

export default function PortfolioPage() {
  const dispatch = useDispatch();
  const { items = [], isLoading, error, filterType } = useSelector((state) => state.portfolio);

  const [typeOfDecoration, setTypeOfDecoration] = useState(filterType || "");
  const [theme, setTheme] = useState("");
  const [colors, setColors] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(getPortfolio());
    }
  }, [dispatch, items]);


  const filteredPortfolio = useMemo(() => {
    if (!Array.isArray(items)) return [];

    return items.filter((item) => {

      const matchType = !typeOfDecoration || 
        item.typeOfDecorations?.toLowerCase().trim() === typeOfDecoration.toLowerCase().trim();


      const matchTheme = !theme || 
        item.theme?.toLowerCase().includes(theme.toLowerCase().trim());


      const matchColors = !colors || 
        item.colors?.toLowerCase().includes(colors.toLowerCase().trim());

      return matchType && matchTheme && matchColors;
    });
  }, [items, typeOfDecoration, theme, colors]);

  const totalPages = Math.ceil(filteredPortfolio.length / itemsPerPage) || 1;

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPortfolio.slice(start, start + itemsPerPage);
  }, [filteredPortfolio, currentPage]);


  const handleSearch = () => {
    setCurrentPage(1);
  };

  return (
    <section className="portfolio-section">
      <div className="container">
        <PortfolioFilters
          typeValue={typeOfDecoration}
          setTypeOfDecoration={(val) => { setTypeOfDecoration(val); setCurrentPage(1); }}
          setColors={setColors}
          setTheme={setTheme}
          onSearch={handleSearch}
        />

        {isLoading && <p>Завантаження...</p>}
        {error && <p>Помилка: {error}</p>}

        {!isLoading && !error && (
          <>
            {filteredPortfolio.length > 0 ? (
              <PortfolioList portfolio={currentItems} onItemClick={setSelectedItem} />
            ) : (
              <p style={{textAlign: 'center', marginTop: '20px'}}>За вашим запитом нічого не знайдено</p>
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}

        {selectedItem && (
          <PhotoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </section>
  );
}