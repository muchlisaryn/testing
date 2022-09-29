import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Back to Home')
});
