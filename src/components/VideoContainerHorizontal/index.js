import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Container, InfoContainer } from './styles';

function VideoContainerHorizontal({ video, watched }) {
  return (
    <Container key={10}>
      <img src={video.thumb} alt="teste" />
      <InfoContainer>
        <div>
          <h4>{video.title}</h4>
          <p>{`${moment.duration(video.duration).minutes()}:${moment
            .duration(video.duration)
            .seconds()}`}</p>
          {watched ? <p>Assistido</p> : ''}
        </div>
      </InfoContainer>
    </Container>
  );
}

export default VideoContainerHorizontal;

VideoContainerHorizontal.propTypes = {
  video: PropTypes.objectOf(Object).isRequired,
};
