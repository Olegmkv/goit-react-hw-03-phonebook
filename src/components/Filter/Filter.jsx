import { StyledInput } from "./Filter.styled";

export const Filter = (({ filter, onChangeFilter }) => {
    return (
        <label>
            Find contact by name
            <StyledInput onChange={onChangeFilter} type="text" name="name" value={filter} required />
        </label>
    );
});
