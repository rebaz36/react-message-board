import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormBoard from './FormBoard';
import LoginForm from './LoginForm';

export const App = ({className}) => {
  const [userCredentials, setUserCredentials] = React.useState([]);
  const handleCallBack = (values => {
    console.log("hey" + values.pwd)
    setUserCredentials(values);
    console.log("pass" + userCredentials.pwd)
  }) 
  return (
  <div className={className}>
    <Container>
      <Row>
        <Col><Header /></Col>
      </Row>
      <LoginForm handleCallBack = {handleCallBack} />
      <FormBoard userCredentials = {userCredentials} />
      <Row>
        <Col><Footer /></Col>
      </Row>
    </Container>
  </div>
  )}


export default App;
