import styled from 'styled-components';

export const Container = styled.li`
  border-radius: 4px;
  min-height: 100%;
  cursor: ${props => (props.watching ? 'pointer' : 'auto')};

  img {
    align-self: left;
    border-radius: 15px;
    max-width: 100%;
  }

  p {
    color: #e30200;
    text-align: end;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  margin-top: 10px;
  > div {
    display: flex;
    flex: 1;
    justify-content: space-between;

    > h4 {
      color: #fff;
    }

    > p {
      color: #fff;
    }
  }
`;
