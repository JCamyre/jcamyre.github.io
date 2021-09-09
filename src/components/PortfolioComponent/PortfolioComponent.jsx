import React from 'react'
import { Link } from 'react-router-dom';

function PortfolioComponent(props) {
    return (
        //  Put github url here?
        <Link to={props.url}>
            <div>
                <div>
                    <img alt='thumbnail for project' src={props.thumbnail} />
                </div>
                <div>
                    <div className='button'>
                        <h5>{props.category}</h5>
                    </div>
                    <h2>{props.title}</h2>
                    <h4>{props.description}</h4>
                    <h4>View <div className='button'></div></h4>
                </div>
            </div>
        </Link>
    )
}

export default PortfolioComponent
