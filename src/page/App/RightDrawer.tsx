import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    list: {
        width: 600,
    },
});

const TemporaryDrawer: React.SFC = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (side: string, open?: boolean) => (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ): void => {
        if (event.type === 'keydown') {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = (): React.ReactElement => (
        <div className={classes.list} role="presentation">
            SSSCENARIO OPEN ICS-3371_singleSelection_scenarioSCENARIO OPEN ICS-3371_singleSelection_scenarioSCENARIO
            OPEN ICS-3371_singleSelection_scenarioSCENARIO OPEN ICS-3371_singleSelection_scenarioCENARIO OPEN
            ICS-3371_singleSelection_scenarioSCENARIO OPEN ICS-3371_singleSelection_scenarioSCENARIO OPEN
            ICS-3371_singleSelection_scenarioSCENARIO OPEN ICS-3371_singleSelection_scenarioCENARIO OPEN
            ICS-3371_singleSelection_scenarioSCENARIO OPEN ICS-3371_singleSelection_scenarioSCENARIO OPEN
            ICS-3371_singleSelection_scenarioSCENARIO OPEN ICS-3371_singleSelection_scenario
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList()}
            </Drawer>
        </div>
    );
};

export default TemporaryDrawer;
