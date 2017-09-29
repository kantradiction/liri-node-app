//---VARIABLES---
var keys = require("./keys.js");
var fs = require("fs");
var command = process.argv[2];

//---FUNCTIONS---
function tweets() {
	console.log("my-tweets works");
}

function spotify(song) {
	console.log("spotify-this-song works");
	var numOfWordsInSong = process.argv.length;
	var songName = song;

	if (song === undefined) {
		songName = process.argv[3];
	}
	
	// accept multiple words for song name
	for(var i = 4; i < numOfWordsInSong; i++) {
		songName = songName + " " + process.argv[i];
	}

	// If no song is provided, default to "The Sign" by Ace of Base
	if (songName === undefined) {
		songName = "The Sign";
	}

	console.log(songName);
}

function movie(movie) {
	console.log("move-this works");
	var numOfWordsInMovie = process.argv.length;

	var movieName = movie;
	if(movie === undefined) {
		movieName = process.argv[3];
	}

	// accept multiple words for song name
	for(var i = 4; i < numOfWordsInMovie; i++) {
		movieName = movieName + " " + process.argv[i];
	}

	// If no movie is provided, default to "Mr. Nobody."
	if (movieName === undefined) {
		movieName = "Mr. Nobody";
	}

	console.log(movieName);
}

function doWhatItSays() {
	var commandArg = "";
	console.log("do-what-it-says works");
	//retrieve command and command arg from file
	
	fs.readFile('random.txt', "utf8", function(error, data) {
		dataArr = data.split(",");
		command = dataArr[0];
		commandArg = dataArr[1];
		//run function based on command and command arg
		checkCommand(commandArg);
	});
}

function checkCommand(songOrMovie) {
	//MY TWEETS
	if (command === "my-tweets") {
		tweets();
	}

	//SPOTIFY
	if (command === "spotify-this-song") {
		spotify(songOrMovie);
	}

	//MOVIE THIS
	if (command === "movie-this") {
		movie(songOrMovie);
	}

	//DO WHAT IT SAYS
	if (command === "do-what-it-says") {
		doWhatItSays();
	}
}

checkCommand();

//BONUS OUTPUT DATA TO LOG.TXT