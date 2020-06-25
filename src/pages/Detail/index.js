import React, { useState, useEffect } from 'react';
import {
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { FaArrowLeft } from 'react-icons/fa';
import api from '~/services/api';

import {
  Container,
  LeftContainer,
  RightContainer,
  Tag,
  TagsList,
} from './styles';

import VideoContainerHorizontal from '~/components/VideoContainerHorizontal';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Detail() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedules', { params: { date } });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    }
    loadSchedule();
  }, [date, schedule]);

  return (
    <Container>
      <LeftContainer>
        <header>
          <FaArrowLeft color="#fff" size={20} />
          <strong>Voltar</strong>
        </header>
        <div>
          <iframe
            src="https://www.youtube.com/embed/gbZ52QuaVqw"
            frameBorder="0"
            allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <strong>Kids Claptone</strong>
        <p>
          RÜFÜS DU SOL Live from Joshua Tree A film by Alexander George With
          Tyrone Lindqvist, James Hunt and Jon George Produced by Danny Robson &
          Alexander George Associate Producer: Irene Ku Assistant Producer:
          Derek Rickert Assistant Director: Zach Toupin
        </p>
        <footer>
          <strong>Detalhes da Pesquisa para 'Claptone'</strong>
          <h4>Palavras Recorrentes</h4>
          <TagsList>
            <Tag>GOT </Tag>
            <Tag>Lucas Lira </Tag>
            <Tag>Greg Ferreira </Tag>
          </TagsList>
          <h4>Dias para visualizar todos os vídeos</h4>
          <p>5 dias</p>
        </footer>
      </LeftContainer>
      <RightContainer>
        <strong>Próximos</strong>
        <ul>
          <VideoContainerHorizontal />
          <VideoContainerHorizontal />
          <VideoContainerHorizontal />
          <VideoContainerHorizontal />
          <VideoContainerHorizontal />
          <VideoContainerHorizontal />
          <VideoContainerHorizontal />
          {/* {schedule.map(time => (
          ))} */}
        </ul>
      </RightContainer>
    </Container>
  );
}
