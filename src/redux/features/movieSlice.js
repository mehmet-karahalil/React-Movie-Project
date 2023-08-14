import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { produce } from "immer";

const initialState = {
  movie: [],
  loading: false,
  Bpage: 1,
};

export const getMovie = createAsyncThunk("getMovie", async (_, thunkAPI) => {
  const { Bpage } = thunkAPI.getState().movie;
  const { token } = thunkAPI.getState().token;
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: Bpage,
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization: token,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const movieSlice = createSlice({
  name: "popularmovie",
  initialState,
  reducers: {
    poppageUp: (state, action) => {
      state.Bpage = action.payload;
    },
    poppageDown: (state, action) => {
      state.Bpage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      return produce(state, (draftState) => {
        draftState.movie = action.payload.results;
        draftState.loading = false;
      });
    });

    builder.addCase(getMovie.pending, (state) => {
      return produce(state, (draftState) => {
        draftState.loading = true;
      });
    });
  },
});

export const { poppageUp, poppageDown } = movieSlice.actions;

export default movieSlice.reducer;
