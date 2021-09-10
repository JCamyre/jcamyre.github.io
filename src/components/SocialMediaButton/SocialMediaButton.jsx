import React from 'react'

function SocialMediaButton(props) {
    return (
        <div>
            <a
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
        </div>
    )
}

export default SocialMediaButton
