//---VARIABLES---
var keys = require("./keys"); //twitter and spotify
var fs = require("fs");
var command = process.argv[2];

//---FUNCTIONS---
function tweets() {
	var client = keys.twitterKeys; //get user info from keys
	var parameters = {
		q: 'AndrewPresnell',
		count: 20
	}

	function searchedData(err, data, response) 
    {
        var tweets = data.statuses;

        for(var i = 0; i < tweets.length; i++)
        {
            //Display when particular tweet was created
            console.log("-----------" + 
            	"\nCreated on: " + tweets[i].created_at + 
            	"\nTweet: " + tweets[i].text);
        }
    }

    //Show Previous 20 tweets and when they were created
	client.get('search/tweets', parameters, searchedData); 
}

function spotify(song) {
	console.log("spotify-this-song works");
	//Get song name
	var numOfWordsInSong = process.argv.length;
	var artist = "";
	var songName = song;
	var previewLink = "";
	var album = "";

	if (!song) {
		songName = process.argv[3];
	}

	// accept multiple words for song name
	for(var i = 4; i < numOfWordsInSong; i++) {
		songName = songName + " " + process.argv[i];
	}

	// If no song is provided, default to "The Sign" by Ace of Base
	if (!songName && !artist) {
		songName = "The Sign";
		artist = "The Ace of Base";
	}

	//show the artist(s), song name, preview link of the song from spotify, the album of the song
	var client = keys.spotifyKeys;

	client.search({ type: 'track', query: songName + ", " + artist }, function(err, data) {
		if (err) {
		    return console.log('Error occurred: ' + err);
		}
	 
	console.log("-----------" + 
		"\nArtist: " + data.tracks.items[0].artists[0].name + 
		"\nSong Name: " + data.tracks.items[0].name + 
		"\nPreview Link: " + data.tracks.items[0].preview_url + 
		"\nAlbum: " + data.tracks.items[0].album.name + 
		"\n-----------"); 
	/*console.log(data.tracks.items[0]);*/
	});

	
}

function movie(movie) {
	console.log("move-this works");
	var numOfWordsInMovie = process.argv.length;
	var movieName = movie;
	var year = "";
	var IMDBRating = "";
	var rottenTomatoesRating = "";
	var country = "";
	var language = "";
	var plot = "";
	var actors = "";


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