import React, { AriaAttributes } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    list: {
        width: 600,
        padding: '20px',
    },
}));
interface ArticleProps {
    article: string;
}
const ArticleContainer: React.SFC<ArticleProps> = props => {
    const { article } = props;
    const classes = useStyles();
    return <div className={classes.list} role="presentation" dangerouslySetInnerHTML={{ __html: article }}></div>;
};
export default ArticleContainer;
