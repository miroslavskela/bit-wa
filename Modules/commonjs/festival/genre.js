

    function Genre(name) {
        this.name = name;
    };

    Genre.prototype.getData = function () {
        var firstLetter = this.name.charAt(0);
        var lastletter = this.name.charAt(this.name.length - 1);
        var result = firstLetter + lastletter;
        return result.toUpperCase();
    }
    module.exports = {
        Genre
    }
