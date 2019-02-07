// //At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

// require("dotenv").config();

// //Add the code required to import the `keys.js` file and store it in a variable.
//   var keys = require("./keys.js");


//   //9. Make it so liri.js can take in one of the following commands:

// //    * `concert-this`

// //    * `spotify-this-song`
var spotify = new Spotify(keys.spotify);
var movieName = process.argv[2];


actionsSpeak(action, argument);

function actionsSpeak (action, argument) {
    argument = userInput();

    switch (action) {
        case "spotify-this-song":

        var songTitle = argument;

        if (songTitle === "") {
            lookupSpecificSong();
        }else {
            SongInfo(songTitle);
        }
        break;
        
    }
}

function SongInfo(songTitle) {
    spofity.search({type: "track", query: songTitle}, function(err, data) {
        if (err) {
            console.log(err);
            return
        }
        var artistArray = data.tracks.items[0].album.artists;
        var artistName = [];

        for (var i = 0; i < artistArray.length; i++) {
            artistName.push(artistArray[i].name);
        }

        var artist = artistName.join(", ");

        console.log("Artist: " + artist);
        console.log("Song: " + data.tracksitems[0].name);
        console.log("Spotify Preview URL: " + artdata.tracks.items[0].preview_url);
        console.log("Album Name: " + data.tracks.items[0].album.name);
    });
}

function lookupSpecificSong() {

	
	spotify.lookup({type: 'track', id: '3c3407938f7248e4bdece5862d743366'}, function(err, data) {
		if (err) {
			logOutput.error(err);
			return
		}

	
		console.log("Artist: " + data.artists[0].name);
		console.log("Song: " + data.name);
		console.log("Spotify Preview URL: " + data.preview_url);
		console.log("Album Name: " + data.album.name);
	});
}

//    * `movie-this`

var axios = require("axios");

var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
axios.get(queryUrl).then(
    function(response) {
        console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("Rating: " + response.data.Rated);
      console.log("Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    }
  );
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
  
//    * `do-what-it-says`

