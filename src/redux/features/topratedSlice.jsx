import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { produce } from "immer";

const initialState = {
  movie: [],
  loading: false,
  page: 1,
};

export const getMovie = createAsyncThunk("getMovie", async (_, thunkAPI) => {
  const { page } = thunkAPI.getState().movie;
  const { token } = thunkAPI.getState().token;
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: page,
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

export const topratedSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    pageUp: (state, action) => {
      state.page = action.payload;
    },
    pageDown: (state, action) => {
      state.page = action.payload;
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

export const { pageUp, pageDown } = topratedSlice.actions;

export default topratedSlice.reducer;
