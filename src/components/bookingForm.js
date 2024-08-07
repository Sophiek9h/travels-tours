import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import formImg from "../images/formImg.png";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        packageName: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('reservationDetails', JSON.stringify(formData));
        
    };
    
    return (
        <Container className='section'>
            <Row>
                <Col>
                    <div className="book-form-container">
                        <h2 className="book-form-header">Book Your Package</h2>
                        <form className="book-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                className="book-form-input"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                className="book-form-input"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="packageName"
                                className="book-form-input"
                                placeholder="Enter a valid package name from our package list"
                                value={formData.packageName}
                                onChange={handleChange}
                            />
                            <input
                                type="date"
                                name="date"
                                className="book-form-input"
                                placeholder="Select date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            <button type="submit" className="book-form-button">Book Now</button>
                        </form>
                    </div>
                </Col>
                <Col>
                    <img src={formImg} alt="Form" className='formImg' />
                </Col>
            </Row>
        </Container>
    );
}
