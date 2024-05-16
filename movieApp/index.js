//https://api.themoviedb.org/3/movie/157336?api_key=API_KEY
//https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
//https://api.themoviedb.org/3/search/movie

const API_KEY = "api_key=c0ebce4108e145e481b98c4c0c008e4b"
const API_URL = "https://api.themoviedb.org/3"
const MOVIE_URL = `${API_URL}/movie/popular?${API_KEY}`
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`
console.log(MOVIE_URL)

const getMovies =  (url) => {
   fetch(url)
       .then(response => response.json())
       .then((data)=> {
          // console.log(data.results);
            showMovies(data.results)
       })
       .catch(err => console.log(err))
}
getMovies(MOVIE_URL);

const movieContainer = document.querySelector(".movieContainer");


const showMovies = (movie) => {
    movieContainer.innerHTML = ' ';
    console.log(movie);
    movie.forEach((movie) => {
        const {title, overview, poster_path, vote_average} = movie;
        console.log(movie)
        const divTag = document.createElement('div')
        divTag.classList.add("movieDetails");
        divTag.innerHTML = `
            <img src="${IMAGE_URL}${poster_path}" alt="eugene">
            <div class="movieTitle">
                <p>${title}</p>
                <p>${vote_average}</p>
            </div>
            <h2>Overview</h2>
            <p>${overview}</p>
            `;
        movieContainer.appendChild(divTag);
    });

}
const form = document.querySelector(".search")
const search = document.querySelector("#searchInput");

form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.value
    if (searchValue) {
        getMovies(SEARCH_URL + "&query=" + searchValue)
    } else {
        getMovies(API_URL);
    }
});

