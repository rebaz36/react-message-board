//child of app and parent to MessageForm and Message Board
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessageForm from "./MessageForm";
import MessageBoard from "./MessageBoard";
import LoginForm from "./LoginForm";

export const FormBoard = () => {
  const [user, setUser] = React.useState([]);
  const [messageBrd, setMessageBrd] = React.useState([]);
  const [showForm, setShowForm] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await (
          await fetch("http://10.21.75.37:3004/messages")
        ).json();
        setMessageBrd(response);
      } catch (error) {
        console.log("API Error: " + error);
      }
    })();
  }, []);

  var userCredentials = { username: "", password: "" };

  if (showForm === true) {
    const handleCallBack = (values) => {
      setUser(values);
      setShowForm(false);
    };
    return (
      <div>
        <Row>
          <Col>
            <LoginForm handleCallBack={handleCallBack} />
          </Col>
        </Row>
      </div>
    );
  } else {
    const handleCallBack = (values) => {
      userCredentials = { username: user.name, password: user.pwd };
      const basicString = `${userCredentials.username}:${userCredentials.password}`;
      (async () => {
        try {
          // Make an API Request and store the Response
          await fetch(`http://10.21.75.37:3004/messages`, {
            method: "POST",
            headers: {
              Authorization: `Basic ${btoa(basicString)}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              msg: values.msg,
            }),
          });
          setMessageBrd([values, ...messageBrd]);
        } catch (error) {
          // This is for Networking Errors
          console.log("API Error: " + error);
        }
      })();
    };
    return (
      <div>
        <Row>
          <Col>
            <MessageForm handleCallBack={handleCallBack} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MessageBoard messageBrd={messageBrd} />
          </Col>
        </Row>
      </div>
    );
  }
};

export default FormBoard;
