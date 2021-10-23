import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function NaviBar() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Michael Vorontsov</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/"> Home </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/expirience"> Expirience </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/works"> My works </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacts"> Contacts </Link>
                </Nav.Link>
              </Nav>
              <Nav style={{'left':'20px'}}>
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={handleShow}
                  style={{ 'margin': "5px" }}
                  size="sm"
                >
                  Log In
                </Button>
                <Button variant="primary" id="mod" onClick={handleShow} size="sm" style={{ 'margin': "5px" }}>
                  Sign out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group controlId="fromBasicEmail" className="fromBasicEmail">
                      <Form.Label>Email Adress</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                  </Form.Group>
                  <Form.Group controlId="fromBasicPassword" className="fromBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>
                  <Form.Group controlId="fromBasicChackbox" className="fromBasicChackbox">
                      <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
              </Form>
          </Modal.Body>
      </Modal>
    </>
  );
}

// <NavBar collapsOnSelect > -> свойство переключает expand на значение false после срабатывания OnSelect у компонента NavBar
// expand="lg"(large) -> точка останова - сворачивание панели навигации
// NavBar.Brand -> Logo
// NavBar.Toggle - кнопка для свертывания меню
// NavBar.Collapse - меню, которое будет разворачиваться
// Nav.Link - ссылки
// Link to -> переход для роутинга
// Modal - модальное окно авторизации
