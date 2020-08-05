import React from 'react';
import Header from '../components/Header';
import { render } from '@testing-library/react';

let wrapper;

describe('Header', () => {
  beforeEach(() => {
    return wrapper = render(<Header />);
  })
  it('> Header / initial load ', () => {
    expect(wrapper).toBeDefined();
  });
  
  it('renders my name', () => {
  wrapper.getByText('HARPAL ASSI')
  })
});
