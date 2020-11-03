import React from 'react';
import renderer from 'react-test-renderer';
import ResultsCount from './ResultsCount';

it('renders correctly', () => {
  const tree = renderer
    .create(<ResultsCount count={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});