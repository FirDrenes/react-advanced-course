export type SelectOptionType = {value: string, children: React.ReactNode}

export const SelectOption: React.FC<SelectOptionType> = ({value, children}) => {
    return <option value={value}>{children}</option>
}