import axios from 'axios';
import { CORS_PROXY } from './constants';

export const toggleLeftDrawer: any = (isShow: boolean, dispatch: any) => {
    return dispatch({
        type: 'TOGGLE_LEFT_DRAWER',
        payload: isShow,
    });
};
export const toggleRightDrawer : any = (isShow: boolean, dispatch: any) => {
    return dispatch({
        type: 'TOGGLE_RIGHT_DRAWER',
        payload: isShow,
    });
};

const Parser = require('rss-parser');
const parser = new Parser({
    customFields: {
        feed: ['media:thumbnail', 'thumbnail'],
        item: [['media:description', 'description'], ['media:thumbnail', 'thumbnail']],
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
});

const fetchCurrentFeedContent: any = async (currentFeedUrl:string, dispatch: any) => {
    const feed = await parser.parseURL(CORS_PROXY + currentFeedUrl);
    console.log('fetchb???', feed.items[0]);
    return dispatch({
        type: 'FETCH_CURRENT_FEED_CONTENT',
        payload: feed.items,
    });
};
export const setCurrentFeedUrl: any = (currentFeedUrl: string, dispatch: any) => {
    fetchCurrentFeedContent(currentFeedUrl, dispatch);
    return dispatch({
        type: 'SET_CURRENT_FEED_URL',
        payload: currentFeedUrl,
    });
};
export const setCurrentArticle: any = (currentArticle: any, dispatch: any) => {
    return dispatch({
        type: 'SET_CURRENT_ARTICLE',
        payload: currentArticle,
    });
};
interface ObjectLiteral {
    [key: string]: string[];
}
const feedsApi = '/feeds';

export const fetchFeedsDataAction = async (dispatch:any) => {
    const data = await axios.get(feedsApi);
    // const data = await fetch(feedsApi);
    // const dataJSON = await data.json();
    const originData = await data.data;
    const dataMap: ObjectLiteral = {};
    originData.forEach((item: { type: string; feed: string }) => {
        const { type, feed } = item;
        dataMap[type] = dataMap[type] || [];
        dataMap[type].push(feed);
    });
    console.log('dataMap', dataMap);
    // dispatch({})
    return dispatch({
        type: 'FETCH_FEEDS',
        payload: dataMap,
    });
};
