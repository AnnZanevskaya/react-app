import React from 'react';
import renderer from 'react-test-renderer';
import MovieEmptyList from './MovieEmptyList';

it('renders correctly', () => {
  const tree = renderer
    .create(<MovieEmptyList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});