import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Avatar from "@mui/material/Avatar";
import photo from "./assets/profile.png";
import ControlledTabs from "./components/Experience";
import Project from "./components/ProjectsCards";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="App-body">
        <div className="introduction">
          <h6 className="intro">Hi! My name is </h6>
          <div className="introduction">
            <h1>Anastasiia Lysenko.</h1>
            <h1>I build things for Web and Data related stuff.</h1>
            <h6>
              I am a <span className="intro">SOFTWARE DEVELOPER</span> with a
              primary focus on developing and maintaining systems.
            </h6>
          </div>
        </div>
        <div className="aboutMeBlock">
          <h2 className="headers" id="aboutMe">
            About me
            <hr></hr>
          </h2>
          <div className="about-body">
            <div className="about-text">
              <div>
                <p>
                  Hello! My name is Anastasiia. I am currently in my second year
                  of studying
                  <span className="intro">
                    {" "}
                    Information Systems Software Engineering
                  </span>
                  . I started programming with Pascal in 2018 and since then
                  I've continued to learn even more advanced programming
                  languages like Python, and C/C++. Besides my university
                  studies, I have done{" "}
                  <span className="intro"> non-degree certificates</span> to
                  learn more about these and other technologies.
                </p>
              </div>

              <div>
                <p>
                  As of now, I spend most of my time learning and studying. Just
                  a couple weeks ago I finished Full Stack Developer Courses
                  with a primary focus on
                  <span className="intro">
                    {" "}
                    Front-End Development and Cloud Computing
                  </span>
                  . The main skills I've gained throughout the duration of my
                  studies are:
                </p>
              </div>
              <ul className="ulist">
                <li className="list">Javascript</li>
                <li className="list">Typescript</li>
                <li className="list">React.js</li>
                <li className="list">Python</li>
                <li className="list">AWS</li>
                <li className="list">MySQL</li>
              </ul>
            </div>
            <div className="about-Photo">
              <img src={photo} alt="profile" className="photo" width="300" />
            </div>
          </div>
        </div>
        <div className="experienceBlock">
          <h2 className="headers" id="experience">
            Experience
            <hr></hr>
          </h2>
          <div className="experience-body">
            <ControlledTabs />
          </div>
        </div>
        <div className="projectsBlock">
          <h2 className="headers" id="projects">
            Projects
            <hr></hr>
          </h2>
          <div className="projects-body">
            <Project />
          </div>
        </div>
        <div className="contactsBlock">
          <h2 className="headers" id="contacts">
            Contacts
            <hr></hr>
          </h2>
          <div className="contacts-body">
            <h4 className="headers">
              If you want to reach out to me, my inbox is always{" "}
              <span className="intro">open to everybody</span>! Please contact
              me through
              <span className="intro"> email or LinkedIn</span>.
            </h4>
            <div className="icons">
              <IconButton>
                <a href="mailto:anastasiialysenko0@gmail.com">
                  <EmailIcon sx={{ color: "#60E8CD", fontSize: 50 }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://github.com/Nanaier" target='_blank'>
                  <GitHubIcon sx={{ color: "#60E8CD", fontSize: 50 }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.linkedin.com/in/anastasiia-lysenko-29ba43245/" target='_blank'>
                  <LinkedInIcon sx={{ color: "#60E8CD", fontSize: 50 }} />
                </a>
              </IconButton>
            </div>
            
          </div>
          
        </div>
        <h6 id="credits">This webpage was created by Anastasiia Lysenko.</h6>
      </div>
    </div>
  );
}

export default App;
