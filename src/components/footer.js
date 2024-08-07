import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        // entire footer section
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-header">About Us</h3>
                    <p>At Travels and Tours your safety is our outmost Important while we offer the best travel packages.</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-header">Quick Links</h3>
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#about" className="footer-link">About Us</a>
                    <a href="#services" className="footer-link">Services</a>
                    <a href="#contact" className="footer-link">Contact Us</a>
                </div>
                <div className="footer-section">
                    <h3 className="footer-header">Contact Us</h3>
                    <p>1234 Street Name, City, State, 12345</p>
                    <p>Email: info@travels&tours.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-header">Follow Us</h3>
                    <div className="footer-social">
                        <a href="https://facebook.com"><FaFacebook /></a>
                        <a href="https://twitter.com"><FaTwitter /></a>
                        <a href="https://instagram.com"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2024 Travels & Tours. All Rights Reserved.
            </div>
        </footer>
    );
}
