/**
 * @author Srinivas Thallam
 * @email [srinivas1854@gmail.com]
 * @create date 2024-02-20 11:49:28
 * @modify date 2024-02-20 11:49:28
 * @desc [description]
 */
import React, { useEffect, useState} from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import MovieCard from './components/MovieCard'
import {fetch_movies} from './api/index'
import PaginationControlled from './components/pagination'

function App() {
  const [data,setData]=useState(null)
  const [page,setPage]=useState(1)
  const [search, setSearch] = useState('')
  const [selectedFilter, setSelectedFilter] = useState("now_playing")
  
  useEffect(()=>{
    fetch_movies(search,selectedFilter,page).then((data)=>setData(data))
    console.log(page)
  },[search,selectedFilter,page])

  
  const count=data?.total_results;
    return (
      <div className="App">
        {/* <h1>Popular Movies</h1> */}
        <h1>{selectedFilter} {`(${data?.total_results})`}</h1>
        <TextField  onChange={(e) => setSearch(e.target.value)} value={search} label="Search...." variant="filled" />
        <Select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
          <MenuItem value="now_playing">Now Playing</MenuItem>
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="top_rated">Top Rated</MenuItem>
          <MenuItem value="upcoming">Upcoming</MenuItem>
        </Select>
        <div>
          {/* {data1?.results?.map((movie)=><li key = {movie.id} >{movie.title}</li>)}  */}
          <Grid container spacing={2}>
          {data?.results?.map(movie => (
            <Grid item key={movie.id} sm={12} md={6} lg={3} xl={3}>
              <MovieCard data={movie} />
            </Grid>)
          )}
        </Grid> 
        <PaginationControlled pagestate={{page:page,setPage:setPage,count:(count/20)>>0}}></PaginationControlled>
        </div>
      </div>
      
  );
}

export default App;
