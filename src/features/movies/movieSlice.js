import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (movieName) =>{
    const response = await movieApi.get(`?apikey=${APIKey}&s=${movieName}&type=movie`)
    return response.data
})
export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncSeries", async (serieName) =>{
    const response = await movieApi.get(`?apikey=${APIKey}&s=${serieName}&type=series`)
    return response.data
})
export const fetchAsyncDetails = createAsyncThunk("movies/fetchAsyncDetails", async (id) =>{
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
    return response.data
})

const initialState = {
    movies : {},
    series : {},
    details : {}
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers:{
        removeDetails : (state) =>{
            state.details = {}
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchAsyncMovies.pending, () =>{
            console.log("pending")
        })
        .addCase(fetchAsyncMovies.fulfilled, (state, action) =>{
            console.log("success")
            return {...state, movies : action.payload}
        })
        .addCase(fetchAsyncMovies.rejected, () =>{
            console.log("rejected")
        })
        .addCase(fetchAsyncSeries.fulfilled, (state, action) =>{
            console.log("success")
            return {...state, series : action.payload}
        })
        .addCase(fetchAsyncDetails.fulfilled, (state, action) =>{
            console.log("success")
            return {...state, details : action.payload}
        })
    }
})
export const {removeDetails} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllSeries = (state) => state.movies.series
export const getAllDetails = (state) => state.movies.details
export default movieSlice.reducer