import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function PortfolioList({portfolio}) {

    return (
    <ul>
    {portfolio.map( ({theme, colors, images}) => (
        <PortfolioCard theme={theme} colors={colors} image={images[0]}/>
    ))}
    </ul>
  )
}
