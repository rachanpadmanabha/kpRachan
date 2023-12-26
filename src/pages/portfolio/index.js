import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio } from "../../content_option";
import { useTheme } from "../../hooks/themeContext.js";
export const Project = () => {
  const { theme } = useTheme();
  const getImageSource =
    theme === 'light' ? true : false;
  return (
    <HelmetProvider>

      <Container className="About-header">
        <Row className="mb-5  pt-md-3" style={{ marginTop: '-50px' }}>
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" style={{ filter: getImageSource ? 'grayscale(100%)' : "" }} />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">View Projects</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

    </HelmetProvider >
  );
};
