const Parser = require('rss-parser');
const feedUrl = "https://medium.com/feed/@netflixtechblog";
const parser = new Parser();

const parse = async (url) => {
    try {
        const feed = await parser.parseURL(url);
        console.log(feed.title);
    } catch (error) {
        console.error('Error parsing RSS feed:', error.message);
    }
};

parse(feedUrl);
