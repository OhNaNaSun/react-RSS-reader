import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PLACE_SEARCH_API } from 'constants/apis';
import LocationIcon from '@material-ui/icons/LocationOn';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const GeoPosition = () => {
  const [positionStr, setPositionStr] = useState('');
  const getCurrentLatLong = () => new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((location) => {
      const latLng = { lat: location.coords.latitude, lng: location.coords.longitude };
      resolve(latLng);
    });
  });
  async function getPosition(latLng: { lat: ''; lng: '' }) {
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
    getCurrentLatLong().then((latLng: any) => {
      getPosition(latLng);
    });
  }, []);
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocationIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {positionStr}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default GeoPosition;
