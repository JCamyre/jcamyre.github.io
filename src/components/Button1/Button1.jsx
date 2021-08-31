import React from 'react';
import './Button1.css';
import styled from 'styled-components';

// Have the thing to invert colors based on primary or secondary class button
// Can only do hover with inline styles, so it is in .css
const Button = styled.button`
    display: inline-block;
    background: rgba(126, 168, 24);
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    box-shadow: 0 3px 17px 0 rgb(112 81 239 / 27%);
    -webkit-transition: box-shadow 350ms,-webkit-transform 350ms;
    &focus: {
        outline: none;
    };
`

// Find more elegant solution for swapping between two sets of styling. i.e: dark and light mode, background and color need to swap


export const Button1 = (props) => {
    return (
        <Button className={props.class} onClick={() => {
            console.log("Boom whaddup");
        }}>
            {props.children}
        </Button>
    )
}

export default Button1