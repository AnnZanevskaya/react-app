import React from 'react';
import NotFound from './NotFound';
import '../../Styles/sass/style.scss';

// This default export determines where your story goes in the story list
export default {
  title: 'NotFound',
  component: NotFound,
};

const Template = (args) => <NotFound {...args} />;

export const NotFoundElement = Template.bind({});

NotFoundElement.args = {
  /* the args you need here will depend on your component */
};
