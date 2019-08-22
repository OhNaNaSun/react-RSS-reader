import React from 'react';
import MiniDrawer from './MiniDrawer';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import './FeedContainer';

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
            </MiniDrawer>
        </div>
    );
};
export default App;
