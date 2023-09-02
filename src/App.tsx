import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import photo from "./assets/photo.jpg";
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
                  Hello! My name is Anastasiia. I am currently in my third year
                  of studying
                  <span className="intro">
                    {" "}
                    Information Systems Software Engineering{" "}
                  </span>
                  at the National Technical University of Ukraine “Igor Sikorsky
                  <span className="intro"> Kyiv Polytechnic Institute</span>”. I
                  can describe myself as highly organized and motived to work
                  and study.
                </p>
              </div>

              <div>
                <p>
                  As of now, I spend most of my time working and studying. I am
                  currently working as a Cloud Computing/Data integration
                  <span className="intro"> intern</span>. The primary
                  technologies we are using and the ones I'm the most proficient
                  in are:
                </p>
              </div>
              <ul className="ulist">
                <li className="list">Typescript</li>
                <li className="list">Javascript</li>
                <li className="list">AWS</li>
                <li className="list">MySQL</li>
                <li className="list">React.js</li>
                <li className="list">Python</li>
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
                <a href="https://github.com/Nanaier" target="_blank">
                  <GitHubIcon sx={{ color: "#60E8CD", fontSize: 50 }} />
                </a>
              </IconButton>
              <IconButton>
                <a
                  href="https://www.linkedin.com/in/anastasiia-lysenko-29ba43245/"
                  target="_blank"
                >
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
