var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var twitterKeys = new Twitter({
  consumer_key: '3k6HcokZPbBlO4bGYnITgTWkR',
  consumer_secret: 'jjQXEyqbwpvJeb1ZT2wAHOa0lBnB8BYYLybFwob9dYAWE7PMvs',
  access_token_key: '49927557-xV9On90kL5dMTiZlPtzOgvKC2IFac02bQ1jiHjtI8',
  access_token_secret: 'c5u7obFM87euJkGRYjJykjDuMa131LcD0dju7rlytp9dE'
});

var spotifyKeys = new Spotify({
	id: '5542f59f69384aa48edd621270d277f5',
	secret: 'e6906014e17d47dc9f960fcad56c769d'
});

module.exports = 
{
	twitterKeys: twitterKeys,
	spotifyKeys: spotifyKeys
};