// //At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();


  //9. Make it so liri.js can take in one of the following commands:

//    * `concert-this`

//    * `spotify-this-song`

var Spotify = require('node-spotify-api');

var search = process.argv[2];

 
const spotifyThisSong = function(spotty) {

  //if not undefined
  if(spotty === undefined) {
    spotty = "love lies";
  }

  var item = process.argv.slice(3).join(" ");
  
  var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
   
  spotify.search({ type: 'track', query: item }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  //  console.log(data);
   console.log("--------------------------");
  //  console.log("Artist: " + data.tracks.items[0].artist.name);
    console.log("Song:         " + data.tracks.items[0].name);
    console.log("Preview Link: " + data.tracks.items[0].preview_url);
    console.log("Album:        " + data.tracks.items[0].album.name);
    console.log("--------------------------");
  
  });
}
 


//    * `movie-this` ---------------------------------------

var axios = require("axios");

const movieThis = function(movieName){
  if (movieName === undefined) {
    movieName = "iron man";
  }

var movieName = process.argv[3];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
axios.get(queryUrl).then(
    function(response) {
      console.log("--------------------------");
        console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("Rating: " + response.data.Rated);
      console.log("Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("--------------------------");
    }
  );
  }
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
  
//    * `do-what-it-says`

// commands----------------

if (search === "spotify-this-song") {
  spotifyThisSong();
}
else if (search === "movie-this") {
  movieThis();
}
else {
  console.log("Command not recognized! Please try again.")
}
