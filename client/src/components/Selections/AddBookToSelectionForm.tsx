import { useDispatch} from 'react-redux';
import { useCallback, useState } from 'react';
import { showError } from '../../actions/error-actions';
import { addBookToSelectionActionCreator } from '../../actions/selection-actions';
import { BookListSelect } from './BookListSelect';
import { SelectionListSelect } from './SelectionListSelect';

const AddBookToSelectionForm = () => {
  const dispatch = useDispatch();
  const [bookId, setBookId] = useState('');
  const [selectionId, setSelectionId] = useState('');

  const onSubmit = () => {
    if (bookId && selectionId) {
      dispatch(addBookToSelectionActionCreator(bookId, selectionId));
    } else {
      dispatch(showError('Please select book and selection'));
    }
  };

  const handleBookSelect = useCallback((val: string) => setBookId(val), []);
  const handleSelectionSelect = useCallback((val: string) => setSelectionId(val), [])
  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="selection_control_wrap"
    >
      <div className="row">
        <div className="selection_control_item col-md-4">
          <label htmlFor="bookSelect">Add book</label>
          <BookListSelect onSelect={handleBookSelect} id="bookSelect"/>
        </div>

        <div className="selection_control_item col-md-5">
          <label htmlFor="selectionSelect">to selection</label>
          <SelectionListSelect id="selectionSelect" onSelect={handleSelectionSelect}/>
        </div>

        <div className="col-md-1 d-flex align-items-end">
          <button type="submit" className="btn btn-primary add-book-to-selection-button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBookToSelectionForm;
