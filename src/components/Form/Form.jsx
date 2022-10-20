import axios from 'axios';
import { Formik } from 'formik';
import {
  Box,
  FormTitle,
  InputForm,
  StyledButton,
  StyledField,
} from './Form.styled';

const initialValues = { name: '', email: '', message: '' };

export function Form() {
  function handleFormSubmit({ name, email, message }, actions) {
    if (name && email && message) {
      axios
        .post('https://feedback-test-1-1.herokuapp.com/api/feedback', {
          name,
          email,
          message,
        })
        .then(console.log)
        .catch(console.log);
      actions.resetForm();
    }
  }

  return (
    <Box>
      <FormTitle>Reach out to us!</FormTitle>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        <InputForm>
          <StyledField type="text" name="name" placeholder="Your name*" />
          <StyledField type="email" name="email" placeholder="Your e-mail*" />
          <StyledField type="text" name="message" placeholder="Your message*" />
          <StyledButton type="submit">Send message</StyledButton>
        </InputForm>
      </Formik>
    </Box>
  );
}
