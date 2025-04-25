// src/pages/HomePage.test.js
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders homepage title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/home/i);
  expect(titleElement).toBeInTheDocument();
});