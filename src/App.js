import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchBooks} from "./thunks/BooksThunk";

function App() {
    const books = useSelector(state => state.books.books);

    const [bookName, setBookName] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks())
    }, []);
    return (
        <div className="App">
            <div>
            </div>
            <div>
                <ul>
                    {books?.map(book => <li>{book.title}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
