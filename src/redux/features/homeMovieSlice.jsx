import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { produce } from "immer";



const initialState = {
  movie: [],
  loading: false,
  Cpage: 1
};

export const homegetMovie = createAsyncThunk("getMovie", async (_, thunkAPI) => {
  const { Cpage } = thunkAPI.getState().homemovie;
  const {token} = thunkAPI.getState().token
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: Cpage,
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: token
    }
  };


  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const homeMovieSlice = createSlice({
  name: "homemovie",
  initialState,
  reducers: {
    pageUp: (state,action)=>{
      state.Cpage=action.payload
    },
    pageDown: (state,action)=>{
      state.Cpage=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(homegetMovie.fulfilled, (state, action) => {
      return produce(state, (draftState) => {
        draftState.movie = action.payload.results;
        draftState.loading = false;
      });
    });

    builder.addCase(homegetMovie.pending, (state) => {
      return produce(state, (draftState) => {
        draftState.loading = true;
      });
    });
  },
});

export const {pageUp,pageDown}  = homeMovieSlice.actions

export default homeMovieSlice.reducer;
