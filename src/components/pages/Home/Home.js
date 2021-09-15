import React from "react";
import Button1 from "../../Button1/Button1";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Home.css";

const imgStyles = {
  width: "800px",
  height: "50%",
  borderRadius: "20px",
  float: "right",
  margin: "20px 120px",
};

// Refactor code and split up into more components

// Other portfolio site has ::before and ::after surrounding each div, I think that's how he gets it to load as you scroll
// Contact page
export default function Home() {
  return (
    <div className="container">
      <div>
        <div>
          <Button1>
            <Link to="/portfolio">See my portfolio</Link>
          </Button1>
        </div>
        <div style={{ height: "800px" }}>
          <div style={{ backgroundColor: "#eeeeee" }}>
            <div>
              <h1 style={{ margin: "20px 60px" }}>
                I'm&nbsp;Joseph S Camyre, a {""}
                <span style={{ color: "rgba(126, 168, 24)" }}>
                  Software Engineer
                </span>
              </h1>
            </div>
            <div className="intro">
              <img
                style={imgStyles}
                alt="R32 GTR"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F2%2Ff%2Fd%2F483719.jpg&f=1&nofb=1"
              />
            </div>
          </div>
        </div>
        <div className="about">
          Feel like I should put the About me stuff here
        </div>
        <div className="skills">
          Put my skills/expertise, idk if this good here
        </div>
        <div className="portfolio">Couple thumbnails from portfolio</div>
        <div>
          Big contact me button? Should I put near top and bot, only one place?
        </div>
      </div>

      <Footer />
    </div>
  );
}
