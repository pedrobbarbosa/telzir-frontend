import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

export const Content = styled.div`
  form {
    width: 400px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    font-family: Roboto;
  }
  h2 {
    margin: 0 0 30px;
    padding: 0px;
    color: #fff;
    text-align: center;
  }
  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  label {
    color: #fff;
    font-size: 20px;
    pointer-events: none;
  }
  button {
    width: 150px;
    height: 50px;
    background: #000;
    color: #fff;
    border-radius: 8px;
    border: none;
    font-size: 20px;
  }
  button:hover {
  }
`;
export const ContentResult = styled.div`
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  font-family: Rowdies;

  h2 {
    padding: 30px;
  }
`;

export const WithPlanTitle = styled.h2`
  color: green;
`;

export const WithoutPlanTitle = styled.h2`
  color: red;
`;
