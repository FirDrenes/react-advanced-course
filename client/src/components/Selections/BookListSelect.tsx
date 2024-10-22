import { useSelector } from "react-redux";
import type { StateType } from "../../reducers/reducer";
import { Select } from "../shared/Select";
import { memo } from "react";

export const BookListSelect = memo(({
    onSelect,
    id = ''
}: {
    onSelect: (value: string) => void,
    id: string
}) => {
    const books = useSelector((state: StateType) => state.books
        .filter(book => !!book._id)
        .map(book => ({value: book._id as string, label: `${book.title} by ${book.author}`})));
    return (
        <Select id={id} onChange={onSelect} options={books} placeholer="Choose a book"/>
    )
})