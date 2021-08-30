import React from 'react';
import './Button1.css';


export default function Button1(props){
    // Allow button to change size?
    return(
        <div>
            <a href={props.link ? props.link : '#' } class='b-secondary w-button' style={{}}>
                {props.children}
            </a>
        </div>
    )
}