import React from 'react';
import { render } from '@testing-library/react';
import Users from './users.component';

it('renders list of users', async () => {
  const { findByText } = render(<Users />);
  const listElement = await findByText(/axios/i);
  expect(listElement).toBeInTheDocument();
});
