//require('dotenv').config();
//const token=process.env.REACT_APP_Token;
const token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDYxNzBhNGJlN2NmYjQxYzc2ZjQyYjQ2YWQxMWY1NSIsInN1YiI6IjY1OGE1M2I4YjdiNjlkMDkwNjZlMDkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WgVWO474O1t0Jn-dz5dzj4xTVDpR8BdjNW-s95XNW44"

export async function fetch_movies_bysearch(search){
const cur_data =  await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1',`,{
headers: {
    Authorization: `Bearer ${token}`
}
}) 

let data_json = await cur_data.json()
return data_json
}

export async function fetch_movies_byfilter(filter,page){
    const cur_data =  await fetch(`https://api.themoviedb.org/3/movie/${filter}?page=${page}`,{
    headers: {
    Authorization: `Bearer ${token}`
    }
    }) 
    
    let data_json = await cur_data.json()
    return data_json
    }

export async function fetch_movies(search,filter,page){
if(search){
    return fetch_movies_bysearch(search)
}
if(filter){
    return fetch_movies_byfilter(filter,page)
}
}