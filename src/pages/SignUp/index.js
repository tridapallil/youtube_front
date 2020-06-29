import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Logo } from './styles';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  sunday: Yup.number().required(),
  monday: Yup.number().required(),
  tuesday: Yup.number().required(),
  wednesday: Yup.number().required(),
  thursday: Yup.number().required(),
  friday: Yup.number().required(),
  saturday: Yup.number().required(),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    email,
    password,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  }) {
    dispatch(
      signUpRequest(
        name,
        email,
        password,
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday
      )
    );
  }

  return (
    <>
      <Logo src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <Input
          name="sunday"
          type="number"
          placeholder="Domingo (tempo em minutos)"
        />
        <Input
          name="monday"
          type="number"
          placeholder="Segunda-feira (tempo em minutos)"
        />
        <Input
          name="tuesday"
          type="number"
          placeholder="Terça-feira (tempo em minutos)"
        />
        <Input
          name="wednesday"
          type="number"
          placeholder="Quarta-feira (tempo em minutos)"
        />
        <Input
          name="thursday"
          type="number"
          placeholder="Quinta-feira (tempo em minutos)"
        />
        <Input
          name="friday"
          type="number"
          placeholder="Sexta-feira (tempo em minutos)"
        />
        <Input
          name="saturday"
          type="number"
          placeholder="Sábado (tempo em minutos)"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
