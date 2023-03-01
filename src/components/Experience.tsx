import React, { useState } from "react";
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
      <Tab eventKey="McDonald's" title="McDonald's">
        <h3 className="headers">KITCHEN STAFF</h3>
        <p>McDonald's | Helsinki, Finland | August 2022 - Present</p>
        <ul>
          <li className="list">
            <span className="intro">Responsible</span> for the restaurant's
            kitchen tasks, e.g. cooking, and{" "}
            <span className="intro">maintaining neatness</span>.
          </li>
          <li className="list">
            Collaborating with 45 colleagues to{" "}
            <span className="intro">ensure smooth customer service</span>.
          </li>
          <li className="list">
            <span className="intro">Working under high pressure</span> requires
            controlling stress and{" "}
            <span className="intro">prioritizing tasks</span>.
          </li>
        </ul>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
