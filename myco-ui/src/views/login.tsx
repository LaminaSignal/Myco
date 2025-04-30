import { memo } from 'react';
import { Container } from '@mantine/core';
import { Authentication } from '../components';

export const Login = memo(() => {
  return (
    <Container size={420} my={40}>
     <Authentication />
    </Container>
  );
});