import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchBooks = createAsyncThunk('fetchAllBooks', async () => {
    const response = await fetch('http://localhost:10001/books');
    return await response.json();
})
