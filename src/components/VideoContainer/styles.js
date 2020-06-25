import styled from 'styled-components';

export const Container = styled.li`
  border-radius: 4px;
  /* display: flex; */
  min-height: 100%;
  /* flex: 1; */

  opacity: ${props => (props.past ? 0.6 : 1)};

  img {
    align-self: left;
    /* max-height: 100%; */
    border-radius: 15px;
    max-width: 100%;
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

    > text {
      color: #fff;
    }
  }
`;
