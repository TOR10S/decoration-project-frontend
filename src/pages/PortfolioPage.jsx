import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { getPortfolio } from '../redux/portfolioSlice';

import PortfolioList from '../components/PortfolioLibrarySection/PortfolioList';
import PortfolioFilters from '../components/PortfolioLibrarySection/PortfolioFilters';
import Pagination from '../components/PortfolioLibrarySection/Pagination';
import PhotoModal from '../components/PortfolioLibrarySection/PhotoModal';

export default function PortfolioPage() {
  const dispatch = useDispatch();
  const { items = [], isLoading, error } = useSelector((state) => state.portfolio);

  const [searchParams, setSearchParams] = useSearchParams();


  const typeFromUrl = searchParams.get("type") || "";


  const [inputTheme, setInputTheme] = useState("");
  const [inputColors, setInputColors] = useState("");


  const [theme, setTheme] = useState("");
  const [colors, setColors] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    if (items.length === 0 && !isLoading && !error) {
      dispatch(getPortfolio());
    }
  }, [dispatch, items.length, isLoading, error]);


  const filteredPortfolio = useMemo(() => {
    return items.filter((item) => {
      const itemType =
        item.typeOfDecoration ||
        item.typeOfDecorations ||
        "";

      const matchType =
        !typeFromUrl ||
        itemType.toLowerCase().includes(typeFromUrl.toLowerCase());

      const matchTheme =
        !theme ||
        item.theme?.toLowerCase().includes(theme.toLowerCase());

      const matchColors =
        !colors ||
        item.colors?.toLowerCase().includes(colors.toLowerCase());

      return matchType && matchTheme && matchColors;
    });
  }, [items, typeFromUrl, theme, colors]);

  const totalPages = Math.ceil(filteredPortfolio.length / itemsPerPage) || 1;

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPortfolio.slice(start, start + itemsPerPage);
  }, [filteredPortfolio, currentPage]);

  const handleSearch = () => {
    setTheme(inputTheme);
    setColors(inputColors);
    setCurrentPage(1);
  };

  return (
    <section className="portfolio-section">
      <div className="container">

        <PortfolioFilters
          typeValue={typeFromUrl}
          themeValue={inputTheme}
          colorValue={inputColors}

          setTypeOfDecoration={(value) => {
            setSearchParams({ type: value });
            setCurrentPage(1);
          }}

          setTheme={setInputTheme}
          setColors={setInputColors}
          onSearch={handleSearch}
        />

        {isLoading && (
          <p>
            Завантаження...
          </p>
        )}

        {error && (
          <p >
            {error}
          </p>
        )}

        {!isLoading && (
          <>
            {filteredPortfolio.length > 0 ? (
              <PortfolioList
                portfolio={currentItems}
                onItemClick={setSelectedItem}
              />
            ) : (
              <p>
                Нічого не знайдено
              </p>
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
          <PhotoModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}

      </div>
    </section>
  );
}