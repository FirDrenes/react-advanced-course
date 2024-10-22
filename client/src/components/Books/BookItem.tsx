import { memo } from "react"
import { Book } from "../../reducers/reducer"

const BookItem = memo(({book, onDelete}: {book: Book, onDelete: (id: string) => void}) => {
    return (
      <li
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            <strong>{book.title}</strong> by {book.author}
          </span>
          <span className="pull-right">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => book._id && onDelete(book._id)}
            >
              DELETE
            </button>
          </span>
        </li>
    )
  }, (oldProps, newProps) => {
    return oldProps.book._id === newProps.book._id && oldProps.onDelete === newProps.onDelete
  })

  export default BookItem;