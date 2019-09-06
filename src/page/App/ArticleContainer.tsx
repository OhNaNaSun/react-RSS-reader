import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
    card: {
        width: '800px',
    },
}));

interface ArticleItemProps {
    article: {
        description: string;
        title: string;
        pubDate: string;
        contentSnippet: string;
        content: string;
        thumbnail: { $: { url: string } };
    };
}
const ArticleContainer: React.SFC<ArticleItemProps> = props => {
    const { article } = props;
    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
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
