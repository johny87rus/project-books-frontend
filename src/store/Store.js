import {configureStore} from '@reduxjs/toolkit';
import booksSlice from "./BooksSlice";

export const store = configureStore({
    reducer: { books: booksSlice}
})



