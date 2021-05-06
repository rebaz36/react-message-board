import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Your name must be at least 2 characters!")
    .max(10, "Your name cannot be more than 10 character.")
    .matches(
      /[A-za-z]{2,}/,
      "Invalid name. Use Upper or Lowercase letters only"
    )
    .required("Your name is required."),
  pwd: yup
    .string()
    .trim()
    .min(3, "Your messaged must be at least 3 character!")
    .max(20, "Your message must be no more than 20 character.")
    .required("A message is required"),
});

//Spacing Not working for Card
export const LoginForm = ({ className, handleCallBack }) => {
  //POST here somwhere
  const handleFormData = (values, actions) => {
    handleCallBack(values);
    actions.setSubmitting(false);
  };
  return (
    <div className={className}>
      <Formik
        validationSchema={schema}
        onSubmit={handleFormData}
        initialValues={{ name: "", pwd: "" }}
      >
        {
          // Your Form is passed to Formik as a function
          ({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
            //Your Form goes here
            <Form noValidate onSubmit={handleSubmit}>
              <Card className="mb-4">
                <Card.Body padding="2px">
                  <Card.Title>Login:</Card.Title>
                  <Form.Row className="align-items-center">
                    <Form.Group as={Col} controlId="name">
                      <Form.Label>Enter Username:</Form.Label>
                      <Form.Control
                        placeholder="Username"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.name && !errors.name}
                        isInvalid={touched.name && errors.name}
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="pwd">
                      <Form.Label>Enter Password:</Form.Label>
                      <Form.Control
                        placeholder="Your password"
                        value={values.pwd}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.pwd && !errors.pwd}
                        isInvalid={touched.pwd && errors.pwd}
                        type="password"
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.pwd}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Col>
                      <Button variant="primary" type="submite" className="mt-3">
                        Login
                      </Button>
                    </Col>
                  </Form.Row>
                </Card.Body>
              </Card>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default LoginForm;
