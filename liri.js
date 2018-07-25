/*

    Features:
        - display your latest tweets.
        - send requests to the Twitter, Spotify and OMDB APIs
*/

// Import Files

require("dotenv").config();

/*

    Steps:
        - Create a file named .env
        - Add variable in this .env file
        - Bring this code `require("dotenv").config()` into any file that wants to have access
            to process.env.
        - Make sure you add .env file into .gitignore

*/



var keys = require('./keys'); // relative path
var Twitter = require('twitter'); // package

var client = new Twitter(keys.twitter);


function searchLatestTweets(q) {
    var params = {
        screen_name: q
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                var tweet = tweets[i];
                console.log('------------------------------------');
                console.log('------------------------------------');
                console.log('------------------------------------');
                console.log('------------------------------------');
                console.log('Created: ', tweet.created_at);
                console.log('Tweet: ', tweet.text);
                console.log('User: ', tweet.user.name);
            }

        }
    });
}


const arg = process.argv[2];

/*
    my-tweets
    spotify-this-song
*/

console.log('argv: ', arg);

if (arg === 'my-tweets') {
    searchLatestTweets(process.argv[3]);
} else if (arg === 'spotify-this-song') {
    // TODO
    // Song
    // Tone of code
} else if (arg === 'movie-this') {
    // TODO
} else if (arg === 'do-what-it-says') {
    // TODO

}




// var Spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);

// spotify.search({
//     type: 'track',
//     query: 'All the Small Things'
// }, function (err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }

//     console.log(data);
// });