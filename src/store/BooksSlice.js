import {createSlice} from "@reduxjs/toolkit";
import {fetchBooks} from "../thunks/BooksThunk";

const initialState = {
    books: [],
}

export const booksSlice = createSlice({
    name: 'booksSlice',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books = [...state.books, action.payload];
        },
        addAll: (state, action) => {
            state.books = [...state.books, ...action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = [...state.books, ...action.payload];
        })
    },
})

export const {addBook, addAll} = booksSlice.actions
export default booksSlice.reducer
