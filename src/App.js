import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBooks} from "./thunks/BooksThunk";

function App() {
    const books = useSelector(state => state.books.books);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch]);
    return (
        <div className="App">
            <div>
            </div>
            <div>
                <ul>
                    {books?.map(book => <li key={book.id}>{book.title}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
