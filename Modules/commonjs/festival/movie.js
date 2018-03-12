const {
    Genre
} = require('./genre');

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + " min, " + this.genre.getData();
}
// function movie

module.exports = {
    Movie
}