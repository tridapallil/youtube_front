import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding: 30px;
  background: #030303;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  padding: 50px;
  background: #fff;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      height: 44px;
      padding: 0 15px;
      color: #3d3d42;
      margin: 0 0 10px;

      &::placeholder {
        color: #3d3d42;
      }
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
`;
