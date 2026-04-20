import React from 'react'

export default function PortfolioCard(theme, colors, image) {
  return (
    <div>
        <img src={image} alt="" />
        <h2>{theme}</h2>
        <h3>{colors}</h3>
    </div>
  )
}
