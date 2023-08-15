import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { produce } from "immer";

const initialState = {
  movie: [],
  loading: false,
  Apage: 1,
};

export const topgetMovie = createAsyncThunk("getMovie", async (_, thunkAPI) => {
  const { Apage } = thunkAPI.getState().topRated;
  const { token } = thunkAPI.getState().token;
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: Apage,
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
  name: "topratedmovie",
  initialState,
  reducers: {
    toppageUp: (state, action) => {
      state.Apage = action.payload;
    },
    toppageDown: (state, action) => {
      state.Apage = action.payload;
    },
    TopSetPageNumber:(state,action)=>{
      state.Apage=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(topgetMovie.fulfilled, (state, action) => {
      return produce(state, (draftState) => {
        draftState.movie = action.payload.results;
        draftState.loading = false;
      });
    });

    builder.addCase(topgetMovie.pending, (state) => {
      return produce(state, (draftState) => {
        draftState.loading = true;
      });
    });
  },
});

export const { toppageUp, toppageDown,TopSetPageNumber } = topratedSlice.actions;

export default topratedSlice.reducer;
