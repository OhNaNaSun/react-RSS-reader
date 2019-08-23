import React from 'react';
import MiniDrawer from './MiniDrawer';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';

const App: React.SFC = () => {
    return (
        <div>
            <MiniDrawer>
                <NestedList></NestedList>
                <NestedList></NestedList>
                <NestedList></NestedList>
                <NestedList />
                <NestedList />
                <Divider />
                <NestedList />
                <NestedList />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add" />
                    </ListItem>
                </List>
            </MiniDrawer>
        </div>
    );
};
export default App;
