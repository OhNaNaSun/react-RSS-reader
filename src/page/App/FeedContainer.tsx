import { CORS_PROXY } from './constants';
import ArticleContainer from './ArticleContainer';
import Drawer from '@material-ui/core/Drawer';
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';

const Parser = require('rss-parser');
const parser = new Parser({
    customFields: {
        feed: ['media:thumbnail', 'thumbnail'],
        item: [['media:description', 'description'], ['media:thumbnail', 'thumbnail']],
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
});

const useStyles = makeStyles(theme => ({
    list: {
        width: 600,
        padding: '20px',
    },
    card: {
        maxWidth: 700,
        marginBottom: '20px',
        marginLeft: '20px',
        padding: '20px',
    },
    media: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        flex: '1 0 auto',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    flexContent: {
        display: 'flex',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    content: {
        width: '100%',
        height: '60px',
        overflow: 'hidden',
    },
    image: {
        width: '100px',
        height: '100px',
    },
    rightDrawer: {
        width: '800px',
    },
}));
interface FeedProps {
    feedUrl: string;
}
interface ArticleItemProps {
    description: string;
    title: string;
    pubDate: string;
    contentSnippet: string;
    content: string;
    thumbnail: { $: { url: string } };
}

const initArticleItem = {
    description: '',
    title: '',
    pubDate: '',
    contentSnippet: '',
    thumbnail: { $: { url: '' } },
    content: '',
};

const FeedContainer: React.SFC<FeedProps> = props => {
    const [data, dataSet] = useState([initArticleItem]);
    const { feedUrl } = props;

    useEffect(() => {
        const fetchMyAPI = async (): Promise<number> => {
            const feed = await parser.parseURL(CORS_PROXY + feedUrl);
            dataSet(feed.items);
            return feed;
        };
        fetchMyAPI();
    }, [feedUrl]);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (): void => {
        setExpanded(!expanded);
    };
    const [state, setState] = React.useState({
        right: false,
    });
    const [article, setArticle] = React.useState(initArticleItem);
    const toggleDrawer = (side: string, open: boolean, article: ArticleItemProps) => (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ): void => {
        if (event.type === 'keydown') {
            return;
        }
        setArticle(article);
        setState({ ...state, [side]: open });
    };
    console.log('data', data);
    return (
        <div>
            <Drawer
                className={classes.rightDrawer}
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false, initArticleItem)}
            >
                <ArticleContainer article={article} />
            </Drawer>

            {data &&
                data.map((item: ArticleItemProps) => {
                    return (
                        <Card className={classes.card} key={item.title} onClick={toggleDrawer('right', true, item)}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={item.title}
                                subheader={item.pubDate}
                            />
                            <div className={classes.flexContent}>
                                {item.thumbnail && item.thumbnail.$ && item.thumbnail.$.url && (
                                    <CardMedia className={classes.media}>
                                        <img className={classes.image} src={item.thumbnail.$.url} />
                                    </CardMedia>
                                )}
                                <CardContent className={classes.content}>
                                    <Typography variant="body2" color="textSecondary" component="div">
                                        <div dangerouslySetInnerHTML={{ __html: item.contentSnippet }}></div>
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                                        for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large
                                        plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay
                                        leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until
                                        thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
                                        cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers,
                                        and cook without stirring, until most of the liquid is absorbed, 15 to 18
                                        minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking
                                        them down into the rice, and cook again without stirring, until mussels have
                                        opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that
                                        don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    );
                })}
        </div>
    );
};
export default FeedContainer;
