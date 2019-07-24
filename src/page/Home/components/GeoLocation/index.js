import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PLACE_SEARCH_API } from 'constants/apis';
import Box from '@material-ui/core/Box';

const GeoPosition = () => {
  const [positionStr, setPositionStr] = useState('');
  const getCurrentLatLong = () => new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((location) => {
      const latLng = { lat: location.coords.latitude, lng: location.coords.longitude };
      resolve(latLng);
    });
  });
  async function getPosition(latLng) {
    await axios
      .get(PLACE_SEARCH_API, {
        params: {
          latitude: latLng.lat,
          longitude: latLng.lng,
        },
      })
      .then((res) => {
        setPositionStr(res.data[0].address);
      });
  }
  useEffect(() => {
    getCurrentLatLong().then((latLng) => {
      getPosition(latLng);
    });
  }, []);
  return (
    <div>
      <Box display="flex" flexDirection="row" color="primary.contrastText" bgcolor="primary.main">
        <Box p={1}>{positionStr}</Box>
      </Box>
    </div>
  );
};

export default GeoPosition;
