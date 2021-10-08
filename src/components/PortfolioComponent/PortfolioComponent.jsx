import React from 'react'
import { Link } from 'react-router-dom';
import { Button1 } from './../Button1/Button1';
import './PortfolioComponent.css';

function PortfolioComponent(props) {
    return (
        //  Put github url here?
        // Different states when you hover over
        <div>
            <a href={props.url} target='_blank' rel='noreferrer'>
                <div className='portfolio-component'>
                    <div className='portfolio-thumbnail'>
                        <img style={props.style}alt='thumbnail for project' src={props.thumbnail} />
                    </div>
                    <div className='portfolio-text'>
                        <div className='button'>
                            <h5>{props.category}</h5>
                        </div>
                        <h2>{props.title}</h2>
                        <h4>{props.description}</h4>
                        <h4><Button1>View</Button1></h4>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default PortfolioComponent
