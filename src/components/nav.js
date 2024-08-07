import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Navigation() {
  const [show, setShow] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  useEffect(() => {
    const storedDetails = localStorage.getItem('reservationDetails');
    if (storedDetails) {
      setReservationDetails(JSON.parse(storedDetails));
    }
  }, [show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCancel = () => {
    localStorage.removeItem('reservationDetails');
    setReservationDetails(null);
    handleClose();
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Travels & Tours</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#contact">Contact us</Nav.Link>
              <Nav.Link className='Reservations' onClick={handleShow}>Reservations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Reservation Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Reservations</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* ternery opertor for if there is reservtio details or not */}
          {reservationDetails ? (
            <>
              <p>Name: {reservationDetails.name}</p>
              <p>Email: {reservationDetails.email}</p>
              <p>Package Name: {reservationDetails.packageName}</p>
              <p>Date: {reservationDetails.date}</p>
              <Button variant="danger" onClick={handleCancel} className="me-2">
                Cancel Reservation
              </Button>
              <Button variant="success" onClick={handleClose}>
                Next: Pay
              </Button>
            </>
          ) : (
            <p>Woohoo, you need to book a spot!</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
