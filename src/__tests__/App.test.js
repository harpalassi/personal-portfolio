import React from 'react';
import App from '../App';
import { render } from '@testing-library/react'

it('> App / initial load ', () => {
  const wrapper = render(<App/>);
  expect(wrapper).toBeDefined();
});
