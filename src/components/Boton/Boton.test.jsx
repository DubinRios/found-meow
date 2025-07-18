import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Boton from './Boton';

test('renderiza el botón correctamente', () => {
  render(
    <MemoryRouter>
      <Boton />
    </MemoryRouter>
  );

  const boton = screen.getByRole('button', { name: /adóptame/i });
  expect(boton).toBeInTheDocument();
});

test('el botón redirige a la ruta /AdoptForm al hacer clic', async () => {
  render(
    <MemoryRouter>
      <Boton />
    </MemoryRouter>
  );

  const boton = screen.getByRole('button', { name: /adóptame/i });
  await userEvent.click(boton);

  expect(boton).toBeEnabled();
});