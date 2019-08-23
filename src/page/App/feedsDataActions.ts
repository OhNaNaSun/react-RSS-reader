import axios from 'axios';
const appkey = '98dew684';
const dataStoreUrl = 'https://keyvalue.immanuel.co/api/KeyVal/';

// From http://keyvalue.immanuel.co/
const feedsDataActions = {
    getValue: async (itemkey: string): Promise<object> => {
        const { data } = await axios.get(dataStoreUrl + 'GetValue/' + appkey + '/' + itemkey);
        return { data };
    },
    postValue: async (itemkey: string, itemval: string): Promise<object> => {
        const { data } = await axios.post(dataStoreUrl + 'UpdateValue/' + appkey + '/' + itemkey + '/' + itemval);
        return { data };
    },
    actOnValue: async (itemkey: 'string', action: 'string'): Promise<object> => {
        const { data } = await axios.post(dataStoreUrl + 'ActOnValue/' + appkey + '/' + itemkey + '/' + action);
        return { data };
    },
};
export default feedsDataActions;
