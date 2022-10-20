import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 557px;
  height: 100%;
  margin: 179px 104px 0 147px;
`;

export const InputForm = styled(Form)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const StyledField = styled(Field)`
  height: ${p => (p.name === 'message' ? '189px' : '93px')};
  margin-top: ${p => (p.name === 'name' ? '30px' : '8px')};
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  padding-left: 46px;
  color: #2d2d2d; ;
`;

export const StyledButton = styled.button`
  margin-top: 23px;
  width: 218px;
  height: 73px;
  color: #ffffff;
  background-color: #fad34f;
  border-radius: 500px;
  border: none;
  font-size: 18px;
`;

export const FormTitle = styled.p`
  color: #3e3e3e;
  font-size: 40px;
  line-height: 1.3;
`;
