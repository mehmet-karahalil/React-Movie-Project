import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNlNGU4MzRjM2JhZmExNWZmNDUxYjg3YWE4NDkxNCIsInN1YiI6IjY0ZDM3MjQ1ZGQ5MjZhMDFlNjI3MTg4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOZ7LD3V-9OR47GEmSJfP_yCdoRJWVbEtxMu8R4Mwd0"
}

export const apiSlice = createSlice({
    name: "api_key",
    initialState,
    reducers:{

    }
})

export default apiSlice.reducer