"use strict";
const{Movie} = require('./movie');
const {Program} = require('./program');
const {Genre} = require('./genre');

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
}

Festival.prototype.numberOfAllMovies = function () {
    var num = 0;
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        num += this.listOfPrograms[i].numberOfMovies();

    }
    return num;
}

Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);

};
Festival.prototype.getData = function () {
    var output = this.name + " has " + this.numberOfAllMovies() + " movie titles" + "\n"
    var output1 = "";
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        var program = this.listOfPrograms[i];
        output1 += "\t" + program.getData();

    }
    return output + output1;
}

module.exports = {
    Festival
}


// function festival