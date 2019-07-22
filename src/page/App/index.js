import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import routerConfig from '../../routerConfig';

const useStyles = makeStyles({
  fixedToBottom: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');
  const homePages = _.filter(routerConfig, { type: 'homePage' });
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.fixedToBottom}>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        {homePages.map(route => (
          <BottomNavigationAction
            key={route.key}
            label={route.label}
            value={route.key}
            icon={route.icon}
            component={Link}
            to={route.path}
          />
        ))}
      </BottomNavigation>
    </div>
  );
}
