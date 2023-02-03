const movies = require('../src/data/movies.json')
const {fetchWithTimeout} = require('../src/services');

export function fetchMovies ()  {
    const resolveFunction = () => movies;
    fetchWithTimeout(1000).then(() => resolveFunction )
} 

const moviePromise = fetchMovies();

moviePromise().then((result) => console.log(result));