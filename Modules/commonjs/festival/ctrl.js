
const { Festival } = require('./festival');
const { Movie } = require('./movie');
const { Program } = require('./program');
const { Genre } = require('./genre');

var action = new Genre("action");
var drama = new Genre("drama");
var comedy = new Genre("comedy");
// console.log(action.getData());

var movie = new Movie("Svemirci su krivi za sve", action, 90);
var movie1 = new Movie("Ko to tamo peva", drama, 101);
var movie2 = new Movie("Umri muski", action, 119);
var movie3 = new Movie("Why him", comedy, 90);

//console.log(movie.getData());


var program1 = new Program("2018-04-05");
var program2 = new Program("2018-04-07")
program1.addMovie(movie);
program1.addMovie(movie1);
program1.addMovie(movie2);
program2.addMovie(movie3);
var weekendFestival = new Festival("Weekend festival")
weekendFestival.addProgram(program1);
weekendFestival.addProgram(program2);
//console.log(program1.listOfMovies);
console.log(weekendFestival.getData());