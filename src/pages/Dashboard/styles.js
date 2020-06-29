import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 86%;
  margin: auto;
  margin-top: 20px;

  form {
    display: flex;
    border-radius: 5px;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    input {
      border: 1px solid #3c3c3c;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      width: 100%;
      color: #fff;
      height: 44px;
      padding: 0 15px;
      margin: 5px 0 15px;
      transition: all 0.2s ease-in-out;

      &::placeholder {
        color: #3c3c3c;
      }

      &:focus {
        border-color: #fff;
      }
    }
  }
  strong {
    display: block;
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  body {
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    align-self: center;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;

  p {
    color: #3c3c3c;
    margin-top: 10px;
    align-self: center;
    font-size: 20px;
  }
`;

export const RightContainer = styled.div`
  margin-top: 20px;

  > p {
    color: #3c3c3c;
    margin-top: 20px;
    align-self: center;
    font-size: 20px;
  }

  ul {
    height: 100%;
    display: grid;
    @media only screen and (min-width: 460px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (min-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
    grid-gap: 25px;
  }

  > strong {
    display: block;
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    border-left: 3px solid #e30200;
    border-radius: 2px;
    padding-left: 8px;
    font-weight: normal;
  }
`;

export const VideoContainer = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.avaiable ? '#999' : '#db1e39')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.avaiable ? '#999' : '#666')};
  }
`;

export const TagsList = styled.div`
  display: flex;
  flex: 1;
  width: auto;
  @media only screen and (max-width: 650px) {
    overflow-x: scroll;
  }
  overflow-y: hidden;
  white-space: nowrap;
`;

export const Tag = styled.span`
  border: 1px solid #3c3c3c;
  text-align: center;
  color: #fff;
  margin-right: 6px;
  font-size: 14px;
  position: relative;
  border-radius: 20px;
  margin: 5px 5px 5px 5px;
  padding: 8px 15px 8px 15px;
  cursor: pointer;

  &:hover {
    background: ${darken(0.08, '#e30200')};
    border: 1px solid #e30200;
  }
`;
