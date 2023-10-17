import { StyledLi, StyledSpan, StyledSpanTel } from "./Contact.styled"

export const ContactItem = ({name,number,id,onDeleteForm}) => {
    return (
        <StyledLi>
            <StyledSpan>{name}</StyledSpan>
            <StyledSpanTel>{number}</StyledSpanTel>
            <button onClick={() => { onDeleteForm(id) } } type='button'>Delete</button>
        </StyledLi>
    )
}