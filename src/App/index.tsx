import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import useStyles from './classes';
import AppTopBar from './TopBar/AppTopBar';
import LeftDrawer from './LeftDrawer/LeftDrawer';
import RightDrawer from './RightDrawer/RightDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
const theme = createMuiTheme({
    typography: {
        fontFamily: ['Merriweather', 'sans-serif'].join(','),
    },
});
const App: React.SFC = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <CssBaseline />
                    <AppTopBar />
                    <LeftDrawer />
                    <RightDrawer />
                </div>
            </Container>
        </ThemeProvider>
    );
};
export default App;
