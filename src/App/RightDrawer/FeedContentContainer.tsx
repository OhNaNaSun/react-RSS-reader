import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { Store } from '../../Store';
import { setCurrentArticle, toggleRightDrawer } from '../../actions';
import useStyles from './../classes';

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

const FeedContainer: React.SFC = () => {
    const { state: appState, dispatch } = React.useContext(Store);
    const { currentFeedContent: data } = appState;
    const classes = useStyles();

    return (
        <div>
            {data &&
                data.map((item: ArticleItemProps, index: number) => {
                    return (
                        <Card
                            className={classes.card}
                            key={index}
                            onClick={(): void => {
                                toggleRightDrawer(true, dispatch);
                                setCurrentArticle(item, dispatch);
                            }}
                        >
                            <CardHeader
                                className={classes.cardHeader}
                                style={{ paddingLeft: '0px' }}
                                avatar={
                                    <Chip
                                        avatar={
                                            <Avatar>
                                                <FaceIcon />
                                            </Avatar>
                                        }
                                        color="primary"
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
                        </Card>
                    );
                })}
        </div>
    );
};
export default FeedContainer;
