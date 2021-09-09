import React from 'react'
import { Link } from 'react-router-dom';
import { Button1 } from './../Button1/Button1';
import './PortfolioComponent.css';

function PortfolioComponent(props) {
    return (
        //  Put github url here?
        // Different states when you hover over
        <Link to={props.url}>
            <div className='portfolio-component'>
                <div>
                    <img alt='thumbnail for project' src={props.thumbnail} />
                </div>
                <div>
                    <div className='button'>
                        <h5>{props.category}</h5>
                    </div>
                    <h2>{props.title}</h2>
                    <h4>{props.description}</h4>
                    <h4><Button1>View</Button1></h4>
                </div>
            </div>
        </Link>
    )
}

export default PortfolioComponent
