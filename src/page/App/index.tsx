import React from 'react';
import MiniDrawer from './MiniDrawer';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import feedsDataActions from './feedsDataActions';
import AddFeedModal from './AddFeedModal';

const data = feedsDataActions.getValue().then(res => {
    console.log('fetch', res);
});
// console.log('fetch', data);
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
                    <AddFeedModal />
                </List>
            </MiniDrawer>
        </div>
    );
};
export default App;
