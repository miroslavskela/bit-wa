const {Festival} = require('./festival');
const{Movie} = require('./movie');

const {Genre} = require('./genre');

    function Program(date) {
        this.date = new Date(date);
        this.myDay = this.date.getDate();
        this.myMonth = this.date.getMonth() + 1;
        this.myDate = this.date.getFullYear();
        this.fullDate = this.myDay + "." + this.myMonth + "." + this.myDate;
        this.listOfMovies = [];
    }

    Program.prototype.addMovie = function (movie) {
        return this.listOfMovies.push(movie);
    }
    Program.prototype.numberOfMovies = function () {
        return this.listOfMovies.length;
    }
    Program.prototype.getProgramLength = function () {
        var length = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            length += movie.length;
        }
        return length;
    }
    Program.prototype.getData = function () {
        var output = "";
        var output = this.fullDate + ", program duration, " + this.getProgramLength() + "min\n"
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i]
            output += "\t\t" + movie.getData() + "\n"
        }
        return output;
    }
    // function program getData important

    module.exports = {
       Program
    }