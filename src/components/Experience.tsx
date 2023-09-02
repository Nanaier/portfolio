import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ControlledTabs() {
  const [key, setKey] = useState<string>("Integrify");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k!)}
      className="mb-3"
    >
      {/* In progress */}
      {/* <Tab eventKey="eBrands" title="eBrands">
        <h3 className="headers">SOFTWARE DEVELOPER INTERN</h3>
        <p>eBrands | Helsinki, Finland | May 2023 - Present</p>
        <ul>
          <li className="list">
            Main focus of the internship was data processing and Cloud computing. During the course of the internship I  
          </li>
          <li className="list"></li>
          <li className="list"></li>
        </ul>
      </Tab> */}
      <Tab eventKey="Integrify" title="Integrify">
        <h3 className="headers">SOFTWARE DEVELOPER TRAINEE</h3>
        <p>Integrify | Helsinki, Finland | September 2022 - February 2023</p>
        <ul>
          <li className="list">
            Sharpening competence as a{" "}
            <span className="intro">Full Stack Developer</span> by collaborating
            with other developers of different seniorities on a diverse range of
            projects and real-life challenges.
          </li>
          <li className="list">
            Focusing on Frontend development with{" "}
            <span className="intro">
              JavaScript, TypeScript, React.js, and Redux
            </span>{" "}
            in addition to{" "}
            <span className="intro">CSS/SASS and Unit testing</span>.
          </li>
          <li className="list">
            Working with DevOps practices including{" "}
            <span className="intro">
              Bash scripting, Docker containers, and CI/CD with GitHub Actions
            </span>
            .
          </li>
          <li className="list">
            Cloud computing with{" "}
            <span className="intro">Amazon Web Serivces & Microsoft Azure</span>
            , along with an introduction to Software architechture &
            Cybersecurity.
          </li>
        </ul>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
