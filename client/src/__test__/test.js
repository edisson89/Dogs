import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const appElement = getByText(/My App/i);
  expect(appElement).toBeInTheDocument();
});
