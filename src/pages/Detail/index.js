import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Youtube from 'react-youtube';
import { FaArrowLeft, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  Container,
  Empty,
  LeftContainer,
  RightContainer,
  Tag,
  TagsList,
  NextVideo,
} from './styles';

import VideoContainerHorizontal from '~/components/VideoContainerHorizontal';

export default function Detail({ location }) {
  const [videos, setVideos] = useState([]);
  const [commonWords, setCommonWords] = useState([]);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [totalDays, setTotalDays] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [watchingId, setWatchingId] = useState('');
  const [errorReturn, setErrorReturn] = useState(false);
  const [loading, setLoading] = useState(false);
  const { search } = queryString.parse(location.search);

  const opts = {
    playerVars: {
      autoplay: 1,
      rel: 0,
      controls: 0,
      modestbranding: 1,
      autoPlay: 1,
      disablekb: 1,
      loop: 0,
    },
  };

  async function loadVideos(search) {
    setLoading(true);
    const response = await api.get('videos', { params: { search } });

    setVideos(response.data.arrResponse);
    setCommonWords(response.data.topWords);
    setTotalDays(response.data.totalDays);

    const responseVideo = await api
      .get('watch', { params: { search } })
      .catch(error => {
        if (error) {
          setLoading(false);
          setErrorReturn(true);
        }
        return false;
      });

    if (responseVideo.data) {
      setTitle(responseVideo.data.title);
      setDescription(responseVideo.data.description);
      setId(responseVideo.data.videoId);
      setLoading(false);
    }
    const responseWatched = await api.get('watched', { params: { search } });

    const watchedList = responseWatched.data.map(row => {
      return row.videoId;
    });

    setWatchedVideos(watchedList);
  }
  useEffect(() => {
    async function loadWatching() {
      const response = await api.get('watching');

      setWatchingId(response.data.videoId);
    }
    loadWatching();
    loadVideos(search);
  }, [search]);

  async function nextVideo() {
    const response = await api.get('watching');
    if (response.data.videoId) {
      toast.error(`Você precisa finalizar o vídeo para inicializar outro.`);
    }
    if (!response.data.videoId) {
      loadVideos(search);
    }
  }

  return (
    <>
      {loading ? (
        <Empty loading={loading}>
          {loading ? <FaSpinner color="#999" size={30} /> : <h1>No results</h1>}
        </Empty>
      ) : (
        <Container>
          {errorReturn ? (
            <Empty>
              <h1>
                Você já assistiu todos os vídeos ou não há mais vídeos para ver
                hoje.
              </h1>
            </Empty>
          ) : (
            <>
              <LeftContainer>
                <header>
                  <div>
                    <FaArrowLeft color="#fff" size={20} />
                    <Link to="/dashboard">Voltar</Link>
                  </div>
                  <NextVideo onClick={() => nextVideo()}>Próximo</NextVideo>
                </header>
                <div>
                  <Youtube videoId={id} opts={opts} onEnd={() => nextVideo()} />
                </div>
                <strong>{title}</strong>
                <p>{description}</p>
                <footer>
                  <strong>Detalhes da Pesquisa para {search}</strong>
                  <h4>Palavras Recorrentes</h4>
                  <TagsList>
                    {commonWords.map(word => (
                      <Tag>{word.name}</Tag>
                    ))}
                  </TagsList>
                  <h4>Dias para visualizar todos os vídeos</h4>
                  <p>{totalDays} dias</p>
                </footer>
              </LeftContainer>
              <RightContainer>
                <strong>Vídeos</strong>
                <ul>
                  {videos.map(video => (
                    <VideoContainerHorizontal
                      watched={
                        watchedVideos.indexOf(video.id) > -1 &&
                        video.id !== watchingId
                      }
                      video={video}
                    />
                  ))}
                </ul>
              </RightContainer>
            </>
          )}
        </Container>
      )}
    </>
  );
}

Detail.propTypes = {
  location: PropTypes.objectOf(Object).isRequired,
};
