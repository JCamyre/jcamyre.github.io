import React from 'react';
import SocialMediaButton from './../SocialMediaButton/SocialMediaButton';
import './Footer.css';

// Maybe use these socialmediabuttons: https://codepen.io/abdelrhmansaid/pen/OJRNOpQ

function Footer() {
    return (
        <footer>
            {/* Issue with hovering (everything gets hovered) */}
            <div className='social-media-icons'>
                {/* Make them horizontal icons */}
                <SocialMediaButton
                    style={{float: 'left'}}
                    href="https://www.instagram.com/realmizkif/"
                    alt="Instagram logo"
                    className="instagram"
                    img="https://uploads-ssl.webflow.com/5fdcc89b08dd76ebd582ce20/5fdcc89b1788e769745cfdc8_icon-social-media-03-designer-template.svg"    
                />
                <SocialMediaButton
                    href="https://www.linkedin.com/in/josephscamyre/"
                    alt="Linkedin logo"
                    className="linkedin"
                    img="https://uploads-ssl.webflow.com/5fdcc89b08dd76ebd582ce20/5fdcc89b1788e7240e5cfdb7_icon-social-media-04-designer-template.svg"    
                />
                <SocialMediaButton
                    href="https://github.com/JCamyre"
                    alt="Github logo"
                    className="github"
                    img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Ficonsimple-logotypes%2F512%2Fgithub-512.png&f=1&nofb=1"    
                />
                {/* Horizontal */}
            </div>
        </footer>
    )
}

export default Footer;