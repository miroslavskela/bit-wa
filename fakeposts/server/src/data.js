var loremIpsum = require('lorem-ipsum');

var Post = require("./post");

const title = () => loremIpsum({
  count: 3,
  units: 'words'
});

const intro = () => loremIpsum({
  count: 2,
  units: 'sentences'
});

function getFakePostData(count) {
  const postsArray = [];
  for (let i = 1; i < count; i++) {
    const post = new Post(i, title(), intro())
    postsArray.push(post)
  }

  return postsArray;
}
console.log(getFakePostData(5));


module.exports = {
  getFakePostData
}