import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import history from '../../services/history';

import { Container, InfoContainer } from './styles';

function VideoContainer({ video, watching, search }) {
  function submitSearch() {
    if (watching) {
      history.push({
        pathname: '/details',
        search: `?search=${search}`,
      });
    }
  }
  return (
    <Container onClick={() => submitSearch()} watching={watching} key={10}>
      <img src={video.thumb ? video.thumb : video.thumb} alt="teste" />
      <InfoContainer>
        <div>
          <h4>{video.title}</h4>
          <p>{`${moment.duration(video.duration).minutes()}:${moment
            .duration(video.duration)
            .seconds()}`}</p>
        </div>
      </InfoContainer>
      {watching ? <p>Assistindo</p> : ''}
    </Container>
  );
}

export default VideoContainer;

VideoContainer.propTypes = {
  video: PropTypes.objectOf(Object).isRequired,
  watching: PropTypes.objectOf(Object).isRequired,
};
