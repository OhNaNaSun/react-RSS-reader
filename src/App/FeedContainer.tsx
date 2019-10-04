import { CORS_PROXY } from './constants';
import ArticleContainer from './ArticleContainer';
import Drawer from '@material-ui/core/Drawer';
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Link from '@material-ui/core/Link';
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
        height: '100px',
        overflow: 'hidden',
    },
    image: {
        width: '100px',
        height: '100px',
    },
    rightDrawer: {
        width: '800px',
    },
    chip: {
        // margin: theme.spacing(1),
        // marginLeft: 0,
    },
    cardHeader: {
        paddingLeft: 0,
    },
}));
interface FeedProps {
    feedUrl: string;
}
interface ArticleItemProps {
    description: string;
    title: string;
    pubDate: string;
    link: string;
    contentSnippet: string;
    content: string;
    creator: string;
    thumbnail: { $: { url: string } };
}

const initArticleItem = {
    description: '',
    title: '',
    pubDate: '',
    link: '',
    contentSnippet: '',
    creator: '',
    thumbnail: { $: { url: '' } },
    content: '',
};

const FeedContainer: React.SFC<FeedProps> = props => {
    const [data, dataSet] = useState([initArticleItem]);
    const { feedUrl } = props;

    useEffect(() => {
        const fetchMyAPI = async (): Promise<number> => {
            const feed = await parser.parseURL(CORS_PROXY + feedUrl);
            console.log(feed.items[0]);
            dataSet(feed.items);
            return feed;
        };
        fetchMyAPI();
    }, [feedUrl]);

    const classes = useStyles();
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
                data.map((item: ArticleItemProps, index: number) => {
                    return (
                        <Card className={classes.card} key={index} onClick={toggleDrawer('right', true, item)}>
                            <CardHeader
                                className={classes.cardHeader}
                                avatar={
                                    <Chip
                                        avatar={
                                            <Avatar>
                                                <FaceIcon />
                                            </Avatar>
                                        }
                                        color="secondary"
                                        label={item.creator}
                                        className={classes.chip}
                                    />
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
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    item.contentSnippet +
                                                    `<a style="margin-left: 2px" href="` +
                                                    item.link +
                                                    `">Read on the Web

</a>`,
                                            }}
                                        ></div>
                                    </Typography>
                                </CardContent>
                            </div>
                            {/*<CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>*/}
                        </Card>
                    );
                })}
        </div>
    );
};
export default FeedContainer;