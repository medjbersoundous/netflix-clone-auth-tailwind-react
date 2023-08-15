const key = '45ad760efc4cd4e4404b85208d907183'
const requests={
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestnowplaying : `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
}
export default requests