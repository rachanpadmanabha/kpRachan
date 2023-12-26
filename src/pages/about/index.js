import "./style.css";
import "./asdf.scss"

import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { Skill } from "./skill";
import image from "./login-screen.png";
import { useTheme } from "../../hooks/themeContext.js";

export const About = () => {
  const [animationIndex, setAnimationIndex] = useState(true);
  const { theme } = useTheme();
  const getImageSource =
    theme === 'light' ? true : false;
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    var intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        setAnimationIndex((prevIndex) => !prevIndex);
      }, 1000);

      setAnimationIndex((prevIndex) => !prevIndex);
    }
    return () => clearInterval(intervalId);
  }, [isHovered]);
  return (
    // <HelmetProvider>

    <Container className="About-header">
      <Row className="mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">About me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">{dataabout.title}</h3>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <div>
            <p style={{ textAlign: "inherit", hyphens: 'none' }}>{dataabout.aboutme}</p>
          </div>
        </Col>
      </Row>
      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Work Timeline</h3>
        </Col>
        <Col lg="7">
          <table className="table caption-top" style={{ background: 'none' }}>
            <tbody>
              {worktimeline.map((data, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>
                      <a href={data.link} target="_blank" rel="noopener noreferrer">
                        {data.where}
                      </a>
                    </td>

                    <td>{data.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Skills</h3>
          <Skill />
        </Col>
        <Col lg="7">
          {skills.map((data, i) => {
            return (
              <div key={i}>
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lang="5">
          <h3 className="color_sec py-4">Services</h3>
          <div className="containerTwo" style={{ marginTop: '-280px', marginBottom: '-300px' }}>
            <div class="containerOne"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              {[1, 2, 3, 4].map((index) => (
                <img src={image} className={animationIndex ? 'active' : ''} alt={`Not Found ${index} `} style={{ filter: getImageSource ? 'grayscale(90%)' : '' }} />
              ))}
            </div>
          </div>
        </Col>
        <Col lg="7">
          {services.map((data, i) => {
            return (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>

    // </HelmetProvider >
  );
};
