import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function PortfolioPage() {
    const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
        async function fetchPortfolio() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      setPortfolio(response.data.hits)
    }
fetchPortfolio()

  }, []);
  return (
    <section>
        <label htmlFor="typeOfDecoration">Оберіть тип</label>
            <select name="typeOfDecoration" id="typeOfDecoration">
                <option value="Фотозона"></option>
                <option value="Диво куля"></option>
                <option value="Гендер-паті"></option>
            </select>
            <input type="text" placeholder='Червоний' />
            <input type="text" placeholder='Денб народження'/>
            <button>пошук</button>

    </section>
  )
}
/* https://decoration-project-backend.onrender.com  window.localStorage.setItem("portfolio", JSON.stringify(response));*/