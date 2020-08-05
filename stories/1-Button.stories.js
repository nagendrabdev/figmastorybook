import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
Text.story = {
  name: 'Button Design',
  parameters: {
     design: {
        type: 'figma',
        url: 'https://www.figma.com/file/stZxJk9DBPV3AOHeIUxxFL/Figma-Storybook?node-id=1%3A2'
     }
  }
};

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
