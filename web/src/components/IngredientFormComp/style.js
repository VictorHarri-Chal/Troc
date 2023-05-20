import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Legend = styled.legend`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const AddIngredientButton = styled(Button)`
  background-color: #2196f3;
  margin-top: 10px;
  margin-right: 20px;
`;

export const RemoveIngredientButton = styled(Button)`
  background-color: red;
  margin-top: 10px;
`;
