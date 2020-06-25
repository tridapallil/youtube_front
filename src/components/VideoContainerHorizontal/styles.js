import styled from 'styled-components';

export const Container = styled.li`
  border-radius: 4px;
  display: flex;
  min-height: 100px;
  width: 100%;
  flex: 1;

  opacity: ${props => (props.past ? 0.6 : 1)};

  img {
    align-self: left;
    max-height: 100%;
    max-width: 40%;
    border-radius: 15px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  > div {
    align-items: flex-start;
    margin-left: 10px;
    justify-content: space-between;

    > h4 {
      color: #fff;
    }

    > p {
      margin-top: 5px;
      color: #dcdcdc;
    }
  }
`;
