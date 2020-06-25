import React from 'react';

import { Container, InfoContainer } from './styles';

function VideoContainer() {
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
          <h4>Trailer GOT</h4>
          <text>5:42</text>
        </div>
      </InfoContainer>
    </Container>
  );
}

export default VideoContainer;
