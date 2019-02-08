// ------------------------Exercise 1------------------------------------

// promise that resolves after set time
let warmupFunction = (millisecondsToResolve) => {
    let thisPromise = new Promise (() => 
    setTimeout (() => {
        console.log(thisPromise);
    }, millisecondsToResolve))
    
}
warmupFunction (2000)

setTimeout (() => console.log('I am calling asynchronously'), 6000)

// ------------------------Exercise 2------------------------------------

//Fetching movies from API
fetch ('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then ((resolve) => resolve.json())
    .then ((movies) => {
        // console.log(movies);

        //logging out movies that longer than 7000
        let longMovies = movies.filter ((movie) => movie.running_times > 7000);
        console.log (longMovies);

        //logging out movies titles from the longMovies list
        let longMovieTitles = longMovies.map ((movie) => movie.title);
        console.log(longMovieTitles);

        //logging out an array of bad movies (rating below 5)
        let badMovies = movies.filter ((movie) => movie.rating < 5);
        console.log(badMovies)

        //logging out bad movies since 2000
        let badMoviesSince2000 = movies.filter ((movie) => {
            return movie.rating < 5 && movie.year >=2000 
        });
        console.log(badMoviesSince2000);

        //logging out titles of bad movies since 2000
        let badMoviesSince2000Titles = badMoviesSince2000.map ((movie) => movie.title);
        console.log(badMoviesSince2000Titles);
    })

// ------------------------Exercise 3------------------------------------

    
const promise = new Promise ((resolve) => {
    setTimeout (() => {
        resolve();
    }, 3000)
})

promise
    .then (() => {
        return fetch ('https://api.duckduckgo.com/?q=DuckDuckGo&format=json&pretty=1')
    })
    .then ((response) => response.json())
    .then ((result) => {
        console.log (result)
    })

    

// ------------------------Exercise 4------------------------------------
//Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.


