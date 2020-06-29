import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [sunday, setSunday] = useState('');
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');

  async function handleSubmit(data) {
    await api.put('weeks', {
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
    });
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function loadWeek() {
      const response = await api.get('weeks');

      setSunday(response.data.sunday);
      setMonday(response.data.monday);
      setTuesday(response.data.tuesday);
      setWednesday(response.data.wednesday);
      setThursday(response.data.thursday);
      setFriday(response.data.friday);
      setSaturday(response.data.saturday);
    }
    loadWeek();
  }, []);

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <input
          type="number"
          onChange={e => setSunday(e.target.value)}
          value={sunday}
          name="sunday"
          required
          placeholder="Domingo (tempo em minutos)"
        />
        <Input
          type="number"
          onChange={e => setMonday(e.target.value)}
          value={monday}
          name="monday"
          required
          placeholder="Segunda-feira (tempo em minutos)"
        />
        <Input
          type="number"
          onChange={e => setTuesday(e.target.value)}
          value={tuesday}
          name="tuesday"
          required
          placeholder="Terça-feira (tempo em minutos)"
        />
        <Input
          type="number"
          onChange={e => setWednesday(e.target.value)}
          value={wednesday}
          name="wednesday"
          required
          placeholder="Quarta-feira (tempo em minutos)"
        />
        <Input
          type="number"
          onChange={e => setThursday(e.target.value)}
          value={thursday}
          name="thursday"
          required
          placeholder="Quinta-feira (tempo em minutos)"
        />
        <Input
          type="number"
          onChange={e => setFriday(e.target.value)}
          value={friday}
          name="friday"
          required
          placeholder="Sexta-feira (tempo em minutos)"
        />
        <Input
          type="number"
          onChange={e => setSaturday(e.target.value)}
          value={saturday}
          name="saturday"
          required
          placeholder="Sábado (tempo em minutos)"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do Sistema
      </button>
    </Container>
  );
}
