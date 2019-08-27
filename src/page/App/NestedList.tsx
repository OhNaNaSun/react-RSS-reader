import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { link } from 'fs';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);
interface FeedListProps {
    feedType: string;
    feeds: { name: string; link: string }[];
}
const NestedList: React.SFC<FeedListProps> = props => {
    console.log('props', props);
    const classes = useStyles();
    const { feedType, feeds } = props;
    const [open, setOpen] = React.useState(false);
    console.log('feeds', feeds);
    function handleClick(): void {
        setOpen(!open);
    }

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={feedType} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {feeds.map((feed: { name: string }) => {
                        return (
                            <ListItem key={feed.name} button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={feed.name} />
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>
        </List>
    );
};

export default NestedList;
