"use client"
import React, {useState} from 'react';
import { styled } from '@mui/system';
import { TextField, Button } from '@mui/material';
import {googleLogin} from '../API/users'
import { login } from '../API/users';
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const Input = styled(TextField)({
  marginBottom: '16px',
});

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  return (
    <Container>
      <Input label="Usuario" variant="filled" sx={{backgroundColor: 'white'}} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Contraseña" type="password" variant="filled" sx={{backgroundColor: 'white'}} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" sx={{ marginBottom: '16px' }} onClick={() => login(email, password)}>
        Iniciar Sesión
      </Button>
      <Button variant="contained" color="secondary" sx={{ marginBottom: '16px' }}>
        Crear Cuenta
      </Button>
      <Button variant="contained" color="warning" sx={{ marginBottom: '16px' }} onClick={() => googleLogin()}>
        Iniciar Sesión con Google
      </Button>
    </Container>
  );
};
