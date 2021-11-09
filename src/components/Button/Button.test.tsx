import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('renders correctly when there are no items', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});