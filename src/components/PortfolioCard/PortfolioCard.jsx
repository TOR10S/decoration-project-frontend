import React from 'react'

export default function PortfolioCard({theme, typeOfDecoration, img}) {
  return (
    <div>
        <img src={img} alt="" />
        <h3>{theme}</h3>
        <p>{typeOfDecoration}</p>
    </div>
  )
}
