import React from 'react'
import PortfolioComponent from '../../PortfolioComponent/PortfolioComponent';
import { Grid } from '@material-ui/core';

function Portfolio() {
    return (
        // Use Grid package?
        <div style={{margin: '20px 60px'}}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <PortfolioComponent 
                        thumbnail='https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheesburger-01e0a43.jpg?quality=90&resize=768,574'
                    />
                </Grid>
                <Grid item xs={6}>
                    <PortfolioComponent 
                        // thumbnail='https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheesburger-01e0a43.jpg?quality=90&resize=768,574'
                    />
                </Grid>
                <Grid item xs={6}>
                    <PortfolioComponent 
                        // thumbnail='https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheesburger-01e0a43.jpg?quality=90&resize=768,574'
                    />
                </Grid>
                <Grid item xs={6}>
                    <PortfolioComponent 
                        // thumbnail='https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheesburger-01e0a43.jpg?quality=90&resize=768,574'
                    />
                </Grid>
            </Grid> 
            {/* Hover over div to zoom a lil (both the pic/thumbnail and actual component), picture, subtitle, title, description/about, view, have a thing to sort type/category by */}
        </div>
    )
}

export default Portfolio
