// //At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

// require("dotenv").config();

// //Add the code required to import the `keys.js` file and store it in a variable.
//   var keys = require("./keys.js");


//   //9. Make it so liri.js can take in one of the following commands:

// //    * `concert-this`

// //    * `spotify-this-song`
// var spotify = new Spotify(keys.spotify);

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

