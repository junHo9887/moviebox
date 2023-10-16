import api from "../api"
const API_KEY=process.env.REACT_APP_API_KEY;
function getMovies(){
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_MOVIES_REQUEST"})
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            const genreApi = api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`)
    
    
            let [popularMovies,topRatedMovies,upComingMovies,genreList,] = await Promise.all([popularMovieApi,topRatedApi,upComingApi,genreApi,])
            dispatch({
                type:"GET_MOVIES_SUCCESS",
                //axios가 받은 데이터를 data필드에 넣어서 줬음
                payload:{popularMovies: popularMovies.data, topRatedMovies: topRatedMovies.data, upComingMovies: upComingMovies.data,
                    genreList: genreList.data.genres},
            });
        }catch(error){
            //에러핸들링 하는 곳
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
    };
};
function getDetail({id}){
return async(dispatch)=>{
    try{
        dispatch({type:"GET_MOVIES_DETAIL_REQUEST",payload:{id}})
        const detailApi=api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
        let [MovieDetail] = await Promise.all([detailApi])
        dispatch({
            type:"GET_MOVIES_DETAIL_SUCCESS",
            //axios가 받은 데이터를 data필드에 넣어서 줬음
            payload:{ MovieDetail:MovieDetail.data}
        });
    }catch(error){
        dispatch({type:"GET_MOVIES_FAILURE"})
    }
}

} 


export const movieAction = {
    getMovies, getDetail
}
