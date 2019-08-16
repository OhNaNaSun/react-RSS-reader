import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    gridItem: {
        border: "1px black solid"
    }
});

export default function ButtonAppBar() {
    const itemArr = [1, 2, 3, 4, 5, 6, 7];
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={0}>
                        {itemArr.map(() => (
                            <Grid className={classes.gridItem} item xs>
                                xs
                            </Grid>
                        ))}
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
