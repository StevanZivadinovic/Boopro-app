const key='d38aa8716411ef7d8e9054b34a6678ac';

const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHoror:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&query=horor&page=1`,//nije dobar, nije za horor
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

}

export default requests;