import React from 'react';
import { withKnobs,number } from '@storybook/addon-knobs';

import ResultsCount from './ResultsCount';
import '../../Styles/sass/style.scss';

export default {
  title: 'ResultsCount',
  component: ResultsCount,
  decorator: [withKnobs]
};

const Template = (args) => <ResultsCount {...args} />;

export const ResultsCountElement = Template.bind({});

ResultsCount.args = {
    count: number("Count", 5)
};
