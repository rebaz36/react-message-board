import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormBoard from "./components/message/FormBoard";

export const App = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <FormBoard />
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
