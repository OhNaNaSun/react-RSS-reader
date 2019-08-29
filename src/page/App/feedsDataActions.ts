import axios from 'axios';
import { CORS_PROXY } from './constants';

const appkey = '98dew684';
const dataStoreUrl = 'https://keyvalue.immanuel.co/api/KeyVal/';

type ResultType = {
    data: string;
};
/*
$.ajax({
    type: 'post',
    url: 'http://localhost:4000/users',
    data: {
      "id": 103,
      "title": "我是新加入的新闻",
      "date": "2016-08-12",
      "likes": 0,
      "views": 0
    }
  }
)*/
// From http://keyvalue.immanuel.co/
const feedsDataActions = {
    getValue: async (): Promise<ResultType> => {
        const { data } = await axios.get('/feeds');
        return data;
    },
    postValue: async (itemkey: string, itemval: string): Promise<object> => {
        const { data } = await axios.post(
            CORS_PROXY + dataStoreUrl + 'UpdateValue/' + appkey + '/' + itemkey + '/' + itemval,
        );
        return { data };
    },
    AddFeed: async (feedType: string, feedVal: string): Promise<object> => {
        const feedsDataPromise = await feedsDataActions.getValue();
        let feedsData = feedsDataPromise.data && JSON.parse(feedsDataPromise.data);
        feedsData = typeof feedsData === 'object' ? feedsData : {};
        console.log('get>>', feedsData, feedType, feedVal);
        feedsData[feedType] = feedsData[feedType] || [];
        // const typeFeedsData = feedsData[feedType] || [];
        feedsData[feedType].push(feedVal);
        console.log('post', feedsData);
        return feedsDataActions.postValue('feeds', JSON.stringify(feedsData));
    },
    actOnValue: async (itemkey: 'string', action: 'string'): Promise<object> => {
        const { data } = await axios.post(dataStoreUrl + 'ActOnValue/' + appkey + '/' + itemkey + '/' + action);
        return { data };
    },
};
export default feedsDataActions;
