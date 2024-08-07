import './App.css';
import React, { useState } from 'react';
import BookingForm from './components/bookingForm';
import Footer from './components/footer';
import Hero from './components/hero';
import PackageSection from "./components/package-section"



function App() {

  // state for search filter
  const [searchCriteria, setSearchCriteria] = useState({ location: '', priceRange: '' });

  const handleSearch = (location, priceRange) => {
      setSearchCriteria({ location, priceRange });
  };


  return (
    <div className="App">
      <Hero onSearch={handleSearch}/>
      <PackageSection searchCriteria={searchCriteria} />
      <BookingForm/>
      <Footer/>
    </div>
  );
}

export default App;
