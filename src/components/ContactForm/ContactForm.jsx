import { Formik } from "formik";
import * as Yup from 'yup';
import { ErrMessage, StyledDiv, StyledForm, StyledField } from "./ContactForm.styled";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required!'),
    number: Yup.number()
        .min(1000000, 'Too Short!')
        .max(999999999999, 'Too Long!')
        .required('This field is required!'),
});

const ContactForm = ({ handleSubmit }) => {
    return (
        <StyledDiv>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    const success = handleSubmit(values)
                    if (success) {
                        actions.resetForm();
                    }
                }}
            >
                {({ errors, touched }) => (
                    <StyledForm>
                        <label>
                            Name
                            <StyledField name="name" />
                            <ErrMessage name="name" component="div" />
                        </label>
                        <label>
                            Number
                            <StyledField name="number" />
                            <ErrMessage name="number" component="div" />
                        </label>
                        <button type="submit">Add contact</button>
                    </StyledForm>
                )}
            </Formik>
        </StyledDiv >
    );
}


export default ContactForm