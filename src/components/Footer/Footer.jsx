import React from 'react';
import SocialMediaButton from './../SocialMediaButton/SocialMediaButton';

function Footer() {
    return (
        <footer>
            <SocialMediaButton
                href="https://www.instagram.com/realmizkif/"
                alt="Instagram logo"
                className="instagram"
                img="https://uploads-ssl.webflow.com/5fdcc89b08dd76ebd582ce20/5fdcc89b1788e769745cfdc8_icon-social-media-03-designer-template.svg"    
            />
            <SocialMediaButton
                href="https://www.linkedin.com/in/joseph-camyre/"
                alt="Linkedin logo"
                className="linkedin"
                img="https://uploads-ssl.webflow.com/5fdcc89b08dd76ebd582ce20/5fdcc89b1788e7240e5cfdb7_icon-social-media-04-designer-template.svg"    
            />
        </footer>
    )
}

export default Footer;