import { memo } from "react";
import { SelectOption } from "./SelectOption";

type CustomSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {onChange: (val: string) => void, placeholer?: string, options: {
    value: string, label: React.ReactNode
}[]};

export const Select: React.FC<CustomSelectProps> = memo(({
    onChange,
    placeholer,
    id = '',
    options,
    ...props
}) => {
    return (
        <select
            {...props}
            className="form-select"
            id={id}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange!(e.target.value)}
          >
            {placeholer&&<option value="" selected disabled>{placeholer}</option>}
            {options.length > 0 && (
                options.map(option => <SelectOption key={option.value} value={option.value}>{option.label}</SelectOption>)
            )}
          </select>
    )
})