import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { Store } from '../../Store';
// import { toggleRightDrawer } from '../../actions';

const useStyles = makeStyles(() => ({
    card: {
        width: '1000px',
        padding: '3%',
    },
}));

interface ArticleItemProps {
    article: {
        description: string;
        title: string;
        pubDate: string;
        contentSnippet: string;
        content: string;
        creator: string;
        thumbnail: { $: { url: string } };
    };
}
const ArticleContainer: React.SFC<ArticleItemProps> = () => {
    const classes = useStyles();
    const { state } = React.useContext(Store);
    const { currentArticle: article } = state;

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Chip
                        avatar={
                            <Avatar>
                                <FaceIcon />
                            </Avatar>
                        }
                        color="secondary"
                        label={article.creator}
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={article.title}
                subheader={article.pubDate}
            />
            <CardContent>
                <Typography paragraph dangerouslySetInnerHTML={{ __html: article.content }} />
            </CardContent>
        </Card>
    );
};
export default ArticleContainer;
