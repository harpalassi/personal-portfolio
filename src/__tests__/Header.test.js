import React from 'react';
import Header from '../components/Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

let wrapper;

describe('> Header', () => {
  beforeEach(() => {
     wrapper = render(<Header />);
  })
  
  it('> Header / initial load', () => {
    expect(wrapper).toBeDefined();
  });
  
  it('> Header / renders author name', () => {
    expect(screen.getByText(/Harpal Assi/i)).toBeInTheDocument()
  })
  it('> Header / renders portrait photo', () => {
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
});
