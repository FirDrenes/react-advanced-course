import { useSelector } from "react-redux";
import { StateType } from "../../reducers/reducer";
import { Select } from "../shared/Select";
import { memo } from "react";

export const SelectionListSelect = memo(({onSelect, id=''}: {onSelect: (val: string) => void, id: string}) => {
    const selections = useSelector((state: StateType) => state.selections.data.map(
        selection => ({value: selection._id, label: `${selection.title} by ${selection.author}`})
    ));
    return <Select id={id} onChange={onSelect} options={selections} placeholer="Choose a selection"/>
})