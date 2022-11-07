import React, { Component } from "react";
import axios from "axios";
import { Form, Card, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class CreateRiders extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      dob: new Date(),
    };
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeDob(date) {
    this.setState({
      dob: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const signUp = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      dob: this.state.dob,
    };
    console.log(signUp);

    axios
      .post("http://localhost:5000/ridersSignUp/add", signUp)
      .then((res) => console.log(res.data));

    // window.location = "/";
  }
  render() {
    return (
      <>
        <Card style={{ width: "20rem",  marginLeft: "auto", marginRight: "auto", marginBottom: "50px", marginTop: "50px"}}>
          <Card.Body style={{ display:"flex"}}>
            <Form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  style={{}}
                  name="firstName"
                  defaultValue={this.state.firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={this.onChangeFirstname}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  style={{}}
                  name="lastName"
                  defaultValue={this.state.lastName}
                  type="text"
                  placeholder="Last Name"
                  onChange={this.onChangeLastname}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  style={{}}
                  name="email"
                  defaultValue={this.state.email}
                  type="text"
                  placeholder="Email"
                  onChange={this.onChangeEmail}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <DatePicker
                  selected={this.state.dob}
                  onChange={this.onChangeDob}
                />
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
