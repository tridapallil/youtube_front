import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '../../services/history';

import {
  Container,
  LeftContainer,
  RightContainer,
  Tag,
  TagsList,
} from './styles';

import VideoContainer from '~/components/VideoContainer';

export default function Dashboard() {
  const [recentSearcheds, setRecentSearcheds] = useState([]);
  const [recentVideos, setRecentVideos] = useState([]);
  const [watchingId, setWatchingId] = useState('');
  const [watchingSearch, setWatchingSearch] = useState('');

  useEffect(() => {
    async function loadSearched() {
      const response = await api.get('searched');

      setRecentSearcheds(response.data);
    }

    async function loadVideos() {
      const response = await api.get('watched');

      setRecentVideos(response.data);
    }

    async function loadWatching() {
      const response = await api.get('watching');

      setWatchingSearch(response.data.search);
      setWatchingId(response.data._id);
    }

    loadSearched();
    loadVideos();
    loadWatching();
  }, []);

  function handleSubmit({ search }) {
    if (watchingId && search !== watchingSearch) {
      toast.error(
        `Você já está assistindo um vídeo de ${watchingSearch}. Pesquise novamente ou acesse clicando no vídeo assistindo.`
      );
    }
    if (search && (search === watchingSearch || !watchingSearch)) {
      history.push({
        pathname: '/details',
        search: `?search=${search}`,
      });
    }
  }

  function handleRecent(value) {
    history.push({
      pathname: '/details',
      search: `?search=${value}`,
    });
  }

  return (
    <Container>
      <LeftContainer>
        <strong>Pesquisar</strong>
        <Form onSubmit={handleSubmit}>
          <Input name="search" placeholder="Pesquisar" />
        </Form>
        <strong>Pesquisas Recentes</strong>
        <TagsList>
          {recentSearcheds.length > 0 ? (
            recentSearcheds.map(searched => (
              <Tag onClick={() => handleRecent(searched.search)}>
                {searched.search}{' '}
              </Tag>
            ))
          ) : (
            <p>Sem pesquisas recentes</p>
          )}
        </TagsList>
      </LeftContainer>
      <RightContainer>
        <strong>Videos Recentes</strong>
        {recentVideos.length > 0 ? (
          <ul>
            {recentVideos.map(video => (
              <VideoContainer
                search={video.search}
                watching={video._id === watchingId}
                video={video}
              />
            ))}
          </ul>
        ) : (
          <p>Sem vídeos recentes</p>
        )}
      </RightContainer>
    </Container>
  );
}
