import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

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
    feeds: string[];

    handleClickFeed: (feedUrl: string) => void;
}
const NestedList: React.SFC<FeedListProps> = props => {
    const classes = useStyles();
    const { feedType, feeds, handleClickFeed } = props;
    const [open, setOpen] = React.useState(false);
    const [currentFeed, setCurrentFeed] = React.useState('');
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
                    {feeds.map((feed: string) => {
                        const currentColor = feed === currentFeed ? 'primary.main' : 'text.primary';
                        return (
                            <ListItem
                                key={feed}
                                data-feed={feed}
                                button
                                className={classes.nested}
                                onClick={(): void => {
                                    console.log('click feedUrl', feed);
                                    setCurrentFeed(feed);
                                    handleClickFeed(feed);
                                }}
                            >
                                <ListItemIcon>
                                    <Typography component="div" variant="body1">
                                        <Box color={currentColor}>
                                            <StarBorder />
                                        </Box>
                                    </Typography>
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography component="div" variant="body1">
                                            <Box color={currentColor}>{feed}</Box>
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>
        </List>
    );
};

export default NestedList;
