import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PLACE_SEARCH_API } from 'constants/apis';

const GeoLocation = () => {
  const [latLong, setLatLong] = useState({});
  const [positionStr, setPositionStr] = useState('');
  const getCurrentLatLong = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      setLatLong({ lat: location.coords.latitude, lng: location.coords.longitude });
    });
  };
  async function getPosition() {
    await axios
      .get(PLACE_SEARCH_API, {
        latitude: latLong.latitude,
        longitude: latLong.longitude,
      })
      .then((res) => {
        setPositionStr(res);
      });
  }
  useEffect(() => {
    getCurrentLatLong();
    getPosition();
  }, []);
  return (
    <div>
      <h2>{JSON.stringify(latLong)}</h2>
      <h2>{JSON.stringify(positionStr)}</h2>
      <div className="gap short" style={{ background: 'linear-gradient(#fff, #ddd)' }} />
    </div>
  );
};

export default GeoLocation;
