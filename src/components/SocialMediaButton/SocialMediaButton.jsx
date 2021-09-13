import React from 'react'
import './SocialMediaButton.css';

function SocialMediaButton(props) {
    return (
          <a
            className='social-media-icons'
            href={props.href}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt={props.alt}
              className={`social-media-icons ${props.className}`}
              src={props.img}
            />
          </a>
    )
}

export default SocialMediaButton
