import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {
  //destructuring the object from values
  const { firstName, lastName, age, email } = values;


  
  return (
    <>
      <Card.Body>
        <p>
          <strong>First Name :</strong> {firstName}{" "}
        </p>
        <p>
          <strong>Last Name :</strong> {lastName}{" "}
        </p>
        <p>
          <strong>Age :</strong> {age}{" "}
        </p>
        <p>
          <strong>Email :</strong> {email}{" "}
        </p>
      </Card.Body>
    </>
  );
};

export default Final;
