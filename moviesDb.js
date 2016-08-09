https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861426
alert('testing');
// movies database 3- 4 movies
var movies = [{
    title: 'juice',
    hasWatched: true,
    rating: 5,
}, {
    title: 'topGun',
    hasWatched: false,
    rating: 4.5,
}]
movies.forEach(function(movie) {
    var result = ' You have'
    if (movie.hasWatched) {
        result += 'watched';
    } else {
        result += 'not seen';
    }

    console.log()
});
