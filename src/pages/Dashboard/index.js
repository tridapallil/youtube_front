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
import { Input } from '@rocketseat/unform';
import api from '~/services/api';

import {
  Container,
  LeftContainer,
  RightContainer,
  Tag,
  TagsList,
} from './styles';

import VideoContainer from '~/components/VideoContainer';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
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
        <strong>Pesquisar</strong>
        <form>
          <Input name="search" placeholder="Pesquisar" />
        </form>
        <TagsList>
          <Tag>GOT </Tag>
          <Tag>Lucas Lira </Tag>
          <Tag>Greg Ferreira </Tag>
        </TagsList>
      </LeftContainer>
      <RightContainer>
        <strong>Recentes</strong>
        <ul>
          <VideoContainer />
          <VideoContainer />
          <VideoContainer />
          <VideoContainer />
          {/* {schedule.map(time => (
          ))} */}
        </ul>
      </RightContainer>
    </Container>
  );
}
