import React from 'react';
import MiniDrawer from './MiniDrawer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
    typography: {
        // Tell Material-UI what the font-size on the html element is.
        // htmlFontSize: 10,
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
