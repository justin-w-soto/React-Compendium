import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello From the PokeDex', () => {
  render(<App />);
  const h1  = screen.getByText(/Hello From the PokeDex/i);
  expect(h1).toBeInTheDocument();
});
