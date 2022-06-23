const key='d38aa8716411ef7d8e9054b34a6678ac';
const genre = {
    id:[12,14,28]
}
const requests = {
    requestPopular:`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=${key}`,
    requestTopRated:`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=${key}`,
    requestTrending:`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=${key}`,
    requestHoror:`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=${key}`,
    requestUpcoming:`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=${key}`

}

export default requests;