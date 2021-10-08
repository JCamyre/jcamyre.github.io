import React from "react";
import Button1 from "../../Button1/Button1";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Home.css";
import { Grid } from '@material-ui/core';
import profile from "../../../images/WOWSOPROFESSIONAL.jpg";

const imgStyles = {
  width: "400px",
  height: "50%",
  borderRadius: "20px",
  float: "right",
  margin: "40px 0px",
};

// Refactor code and split up into more components

// Other portfolio site has ::before and ::after surrounding each div, I think that's how he gets it to load as you scroll
// Contact page
export default function Home() {
  return (
    <div className="container">
      <div>
        <Grid container spacing={1} style={{ backgroundColor: "#eeeeee", margin: '20px 0px', borderRadius: '6px' }}>
          <Grid item xs={6}>
              <div style={{float: 'left'}}>
                <h1 style={{ margin: "20px 20px" }}>
                  I'm&nbsp;Joseph S Camyre, a {""}
                  <span style={{ color: "rgba(126, 168, 24)" }}>
                    Software Engineer
                  </span>
                </h1>
              </div>
          </Grid>
          <Grid item xs={6  }>
              <div style={{float: 'left'}} className="intro">
                <img
                  style={imgStyles}
                  alt="Profile"
                  src={profile}
                />
              </div>
          </Grid>
        </Grid>
        <div>
          <Button1>
            <Link to="/portfolio">See my portfolio</Link>
          </Button1>
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
