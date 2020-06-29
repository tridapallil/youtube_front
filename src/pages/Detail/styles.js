import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 86%;
  margin: auto;
  margin-top: 30px;
  @media only screen and (min-width: 650px) {
    display: flex;
    flex: 1;
  }

  header {
    display: flex;
    flex: 1;
    justify-content: space-between;

    > div {
      display: flex;
      flex: 1;
      a {
        margin-left: 10px;
        display: block;
        color: #fff;
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: normal;
      }
    }
  }

  div {
    border-radius: 5px;
    align-self: flex-start;
    iframe {
      border-radius: 20px;
      width: 100%;
      height: 500px;
      margin-bottom: 10px;
    }

    button {
      border: 0;
      background: none;
    }

    input {
      border: 1px solid #3c3c3c;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      width: 100%;
      color: #3c3c3c;
      height: 44px;
      padding: 0 15px;
      margin: 5px 0 15px;

      &::placeholder {
        color: #3c3c3c;
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

export const NextVideo = styled.strong`
  display: block;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: normal;
`;

export const LeftContainer = styled.div`
  @media only screen and (min-width: 650px) {
    width: 70%;
  }
  margin-right: 10px;
  margin-bottom: 25px;

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #dcdcdc;
  }

  footer {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    > strong {
      border-left: 3px solid #e30200;
      padding-left: 8px;
      border-radius: 2px;
    }

    > h4 {
      padding-left: 8px;
      margin-bottom: 5px;
      margin-top: 5px;
      color: #fff;
    }

    > p {
      padding-left: 8px;
    }
  }
`;

export const RightContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 25px;
  @media only screen and (min-width: 650px) {
    width: 30%;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 25px;
    height: 100%;
  }

  > strong {
    display: block;
    color: #fff;
    border-left: 3px solid #e30200;
    padding-left: 8px;
    border-radius: 2px;
    font-size: 20px;
    margin-bottom: 10px;
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Empty = styled.div.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  h1 {
    text-align: center;
    margin-top: 20%;
    color: #999;
  }
  text-align: center;
  ${props =>
    props.loading &&
    css`
      svg {
        margin-top: 20%;
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
