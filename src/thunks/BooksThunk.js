import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchBooks = createAsyncThunk('fetchAllBooks', async () => {
    const response = await fetch('https://api.library.mikhailov.net/api/v1/books');
    return await response.json();
})
