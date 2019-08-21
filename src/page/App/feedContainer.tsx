import React, { useState, useEffect } from 'React';
const Parser = require('rss-parser');
const parser = new Parser({
    customFields: {
        item: ['media:description', 'description'],
    },
});
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
// (async () => {
//     const feed = await parser.parseURL(CORS_PROXY + 'https://ponyfoo.com/articles/feed');
//     // console.log(feed.title);
//     feed.items.slice(0, 1).forEach((item: items) => {
//         if (item.description) {
//             console.log(item.description);
//             document.body.innerHTML += item.description;
//         }
//     });
// })();
export const feedContainer: React.FunctionComponent<IProps> = (): JSX.Element => {
    // export default feedContainer = ({ data: [] }) => {
    const [data, dataSet] = useState(false);
    const fetchMyAPI = async (): Promise<number> => {
        // async function fetchMyAPI() {
        // let response = await fetch('api/data')

        // const loadData = await parser.parseURL(CORS_PROXY + 'https://ponyfoo.com/articles/feed');
        const feed = await parser.parseURL(CORS_PROXY + 'https://ponyfoo.com/articles/feed');
        // response = await res.json()
        dataSet(feed.items);
    };

    useEffect(() => {
        fetchMyAPI();
    }, []);

    return (
        <div>
            {data.slice(0, 1).map(item => (
                <div key={item.title}>{item.description}</div>
            ))}
        </div>
    );
};
