import React, { useEffect, useRef, useState } from "react";
import data from "./data";
import Pack from "./package";

export default function PackageSection({ searchCriteria }) {
    const sectionRef = useRef(null);
    const [filteredData, setFilteredData] = useState(data);


    // use effect is used for the animation to determine when this entire seection is in view or not
    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);


    // function for the filter 
    useEffect(() => {
        const { location, priceRange } = searchCriteria;

        // Parse the priceRange to handle both single values and ranges
        let minPrice = 0;
        let maxPrice = Infinity;
        if (priceRange) {
            const priceParts = priceRange.split("-");
            if (priceParts.length === 2) {
                minPrice = parseInt(priceParts[0], 10);
                maxPrice = parseInt(priceParts[1], 10);
            } else {
                maxPrice = parseInt(priceRange, 10);
            }
        }

        const filtered = data.filter(item => {
            const matchesLocation = location ? item.location.toLowerCase().includes(location.toLowerCase()) : true;
            const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
            return matchesLocation && matchesPrice;
        });
        setFilteredData(filtered);
    }, [searchCriteria]);

    const pack = filteredData.map(item => (
        <Pack key={item.id} item={item} />
    ));

    return (
        <div ref={sectionRef} className="fade-section section">
            <h2 className="pack-head">Our Star Packages</h2>
            <p>These destinations over the years have been the best vacation spots in the world!</p>

            {/* the package list */}
            <section className='card-list'>
                {pack}
            </section>
        </div>
    );
}
