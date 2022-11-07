import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
function Login({ handleClose }) {
  return (
    <>
      <Modal show={() => handleClose(false)} onHide={() => handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Check
                inline
                type="checkbox"
                label="Remember me"
              ></Form.Check>
            </Form.Group>
          </Form>
          <Button variant="outline-primary" onClick={() => handleClose(false)}>
            Submit
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Form.Text>
            {" "}
            Forgot <a href="#">password?</a>
          </Form.Text>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
