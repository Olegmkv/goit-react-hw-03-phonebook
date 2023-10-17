import { StyledDiv, StyledInput } from "./ContactForm.styled";

export const ContactForm = ({ name, number, onSaveForm, onChangeForm }) => {
    return (
        <StyledDiv>
            <form onSubmit={onSaveForm}>
                <label>
                    Name
                    <StyledInput
                        onChange={onChangeForm}
                        type="text"
                        name="name"
                        value={name}
                        required
                    />
                </label>
                <label>
                    Number
                    <StyledInput
                        onChange={onChangeForm}
                        type="tel"
                        name="number"
                        value={number}
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        </StyledDiv>
    );
};
