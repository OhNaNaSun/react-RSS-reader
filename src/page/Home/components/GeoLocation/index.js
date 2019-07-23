import React, { useState, useEffect } from 'react';

const GeoLocation = () => {
  const [latLong, setLatLong] = useState({});
  const getCurrentLatLong = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      setLatLong({ lat: location.coords.latitude, lng: location.coords.longitude });
    });
  };
  useEffect(() => {
    getCurrentLatLong();
  }, []);
  return (
    <div>
      <h2>{JSON.stringify(latLong)}</h2>
      <div className="gap short" style={{ background: 'linear-gradient(#fff, #ddd)' }} />
    </div>
  );
};

export default GeoLocation;
