import React, { useState } from "react";
import one from "../images/oe.png";
import Navigation from "./nav";

export default function Hero({ onSearch }) {
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(location, priceRange);
    };

    return (
        <section>
            <Navigation fixed="top" />
            <div className="hero">
                <img src={one} alt="hero img" className="hero-img" />
                <div className="hero-overlay">
                    <h1 className="hero-header">Travels & Tours</h1>
                    <p className="hero-text">Book your safe and secure spaces before your trips</p>

                    {/* filter form */}
                    <form className="hero-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="hero-input"
                            placeholder="Dream Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <input
                            type="text"
                            className="hero-input"
                            placeholder="Price Range"
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        <button type="submit" className="hero-button">Search</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
