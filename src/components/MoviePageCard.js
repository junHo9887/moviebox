import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MoviePageCard = ({item}) => {
  const navigate=useNavigate();
  const {genreList} = useSelector(state =>state.movie)
  const goMovieDetail=()=>{
    navigate(`/movies/${item.id}`)
  }
  return (
    <div
    className='moviePageCard'
    style={{
      backgroundImage:
      "url("
      +`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`
      +")", width:'200px', height:'300px', backgroundSize:'cover'}}
    onClick={goMovieDetail}>
      <h1>{item.title}</h1>
      <div className='genreList'>
        {item?.genre_ids.map((id, index)=>
        <span key={index}>
          {genreList.find(item=>item.id==id).name}
        </span>)}
      </div>
    </div>
  )
}

export default MoviePageCard