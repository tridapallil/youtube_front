import React from 'react';

import { Container, InfoContainer } from './styles';

function VideoContainerHorizontal() {
  return (
    <Container key={10}>
      <img
        src={
          'https://assets.propmark.com.br/legacy/upload/2019/04/5cb611c9cfe4e-5ce550b5e0ffd-980x480.JPG'
            ? `https://assets.propmark.com.br/legacy/upload/2019/04/5cb611c9cfe4e-5ce550b5e0ffd-980x480.JPG`
            : 'https://assets.propmark.com.br/legacy/upload/2019/04/5cb611c9cfe4e-5ce550b5e0ffd-980x480.JPG'
        }
        alt="teste"
      />
      <InfoContainer>
        <div>
          <h4>Trailer GOT da quarta temporada</h4>
          <p>5:42</p>
        </div>
      </InfoContainer>
    </Container>
  );
}

export default VideoContainerHorizontal;
