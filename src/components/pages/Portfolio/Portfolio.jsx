import React from 'react'
import PortfolioComponent from '../../PortfolioComponent/PortfolioComponent';

function Portfolio() {
    return (
        <div>
            {/* Hover over div to zoom a lil (both the pic/thumbnail and actual component), picture, subtitle, title, description/about, view, have a thing to sort type/category by */}
            <PortfolioComponent 
                thumbnail='https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheesburger-01e0a43.jpg?quality=90&resize=768,574'
            />
        </div>
    )
}

export default Portfolio
