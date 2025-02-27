import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';

//components
import Selection from './components/Selections/Selection';
import AddBookToSelectionForm from './components/Selections/AddBookToSelectionForm';
import CreateSelectionForm from './components/Selections/CreateSelectionForm';
import ErrorModal from './components/Errors/ErrorModal';

//styles
import './App.css';
import CreateBookForm from './components/Books/CreateBookForm';
import Books from './components/Books/Books';
import { StateType } from './reducers/reducer';
import { fetchBooksAction } from './actions/book-actions';
import { fetchSelectionsAction } from './actions/selection-actions';
import { ThemeContextProvider } from './contexts/ThemeContextProvider';
import { ThemeWrapper } from './components/theme/ThemeWrapper';
import { SwitchTheme } from './components/theme/SwitchTheme';

const App = () => {
  const selections = useSelector((state: StateType) => state.selections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAction);
    dispatch(fetchSelectionsAction);
  }, []);

  return (
    <ThemeContextProvider>
      <ThemeWrapper>
      <SwitchTheme/>
        <div className="wrapper books_wrapper">
          <h2 className="page_title">Books</h2>
          <CreateBookForm />
          <Books />
        </div>
        <div className="wrapper selections_wrapper">
          <h2 className="page_title">Selections</h2>
          <CreateSelectionForm />
          <AddBookToSelectionForm />
          {selections?.data.length > 0 && (
            <Accordion>
              {selections.data.map((el, i) => (
                <Selection key={i} item={el} itemKey={i} />
              ))}
            </Accordion>
          )}
        </div>
        <ErrorModal />
     </ThemeWrapper>
     </ThemeContextProvider>
  );
};

export default App;
