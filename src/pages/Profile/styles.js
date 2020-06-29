import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 50px;
  border-radius: 10px;
  padding: 50px;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #3d3d42;
      margin: 0 0 10px;

      &::placeholder {
        color: #3d3d42;
      }
    }

    hr {
      margin-top: 10px;
      margin-bottom: 20px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      margin-bottom: 25px;
      width: 100%;
      height: 40px;
      background: transparent;
      font-weight: bold;
      color: #3d3d42;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      font-weight: lighter;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#dcdcdc')};
      }
    }

    a {
      color: #3d3d42;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    margin: 5px 0 0;
    height: 44px;
    background: #e30200;
    color: #fff;
    border: 0;
    border-radius: 10px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#e30200')};
    }
  }
`;
