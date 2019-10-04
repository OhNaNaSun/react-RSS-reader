import React from 'react';
import MiniDrawer from './MiniDrawer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
    typography: {
        fontFamily: ['Merriweather', 'sans-serif'].join(','),
    },
});
const App: React.SFC = () => {
    return (
        <ThemeProvider theme={theme}>
            <MiniDrawer></MiniDrawer>
        </ThemeProvider>
    );
};
export default App;
