import { StyledUl } from "./Contact.styled";
import { ContactItem } from "./ContactItem";

export const ContactList = ({ contacts, onDeleteForm }) => {
    return (
        <StyledUl>
            {contacts.map(({ id, name, number }) => {
                return(
                    <ContactItem key={id} name={name} number={number} id={id} onDeleteForm={ onDeleteForm } />
                )
            })}
        </StyledUl>
    )
}