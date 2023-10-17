import { ErrorMessage,Form,Field } from 'formik';
import styled from 'styled-components'


export const StyledDiv = styled.div`
width: 410px;
padding: 10px;
outline: 1px solid gray;
`;

export const StyledField = styled(Field)`
margin-bottom: 16px;
display: block;

font-size: 18px;
`;

export const StyledForm = styled(Form)`
// display: flex;
// flex-direction: column;

`;


export const ErrMessage = styled(ErrorMessage)`
color: tomato;

font-size: 18px;
`;