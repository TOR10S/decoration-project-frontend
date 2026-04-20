
import React, { useEffect, useState } from 'react'
import PortfolioList from '../components/PortfolioLibrarySection/PortfolioList';
import { fetchPortfolioData, fetchPortfolioFilteredData } from '../portfolio-api';
export default function PortfolioPage() {
  const [typeOfDecoration, setTypeOfDecoration] = useState("");
  const [theme, setTheme] = useState("");
  const [colors, setColors] = useState("");
    const [portfolio, setPortfolio] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    async function fetchPortfolioFiltered () {try {
          setPortfolio([]);
          setLoading(true)
          setError(false);
      const response = await fetchPortfolioFilteredData(typeOfDecoration, theme, colors)
      setPortfolio(response)
      
    localStorage.setItem("portfolio", JSON.stringify(response));
    } catch (err) {
      setError(true)
    } 
    finally {
      setLoading(false)
    }

    }
    useEffect(() => {
       const savedPortfolio = localStorage.getItem("portfolio");

  if (savedPortfolio) {
    setPortfolio(JSON.parse(savedPortfolio));
    return; 
  }
        async function fetchPortfolio() {
          try {
          setLoading(true)
      const response = await fetchPortfolioData()
      setPortfolio(response)
      
    localStorage.setItem("portfolio", JSON.stringify(response));
    } catch (err) {
      setError(true)
    } 
    finally {
      setLoading(false)
    }
    }
fetchPortfolio()

  }, []);
  console.log(portfolio);
  
  return (
    <section>
        <label htmlFor="typeOfDecoration">Оберіть тип</label>
            <select  onChange={(e) => setTypeOfDecoration(e.target.value)} name="typeOfDecoration" id="typeOfDecoration">
                <option value="Фотозона"></option>
                <option value="Диво куля"></option>
                <option value="Гендер-паті"></option>
            </select>
            <input type="text" placeholder='Червоний' onChange={(e) => setColors(e.target.value)} />
            <input type="text" placeholder='День народження' onChange={(e) => setTheme(e.target.value)}/>
            <button onClick={fetchPortfolioFiltered}>пошук</button>
             {portfolio.length >0 && <PortfolioList portfolio={portfolio}/>} 
             {loading && <p>Завантаження</p>}
             {error && <p>Щось пішло не так </p>}
    </section>
  )
}
