var keys = require("./keys.js");
var command = process.argv[2];

//MY TWEETS
if (command === "my-tweets") {
	console.log("my-tweets works");
}

//SPOTIFY
if (command === "spotify-this-song") {
	console.log("spotify-this-song works");
	var numOfWordsInSong = process.argv.length;
	var songName = process.argv[3];

	// accept multiple words for song name
	for(var i = 4; i < numOfWordsInSong; i++) {
		songName = songName + " " + process.argv[i];
	}

	// If no song is provided, default to "The Sign" by Ace of Base
	if (songName === "") {
		songName = "The Sign";
	}
}


//MOVIE THIS
if (command === "movie-this") {
	console.log("move-this works");
	/*var movieName = process.argv[]*/
}


//DO WHAT IT SAYS
if (command === "do-what-it-says") {
	console.log("do-what-it-says works");
}
//BONUS OUTPUT DATA TO LOG.TXT