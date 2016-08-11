
// movies database 3- 4 movies
var movies = [{
    title: 'juice',
    hasWatched: true,
    rating: 5
}, {
    title: 'topGun',
    hasWatched: false,
    rating: 4.5
}, {
    title:'titanic',
    hasWatched:true,
    rating:5
}]
movies.forEach(function(movie) {
    var result = 'You have '
    if (movie.hasWatched) {
        result += 'watched ';
    } else {
        result += 'not seen ';
    }
    result += "\""+movie.title + "\" -";
    result += movie.rating +"stars ";
    console.log()
});
