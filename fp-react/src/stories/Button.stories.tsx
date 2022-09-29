import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Button,
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;



// ^?
export const Primary: Story = ({args}) => <Button {...args} />;
Primary.args = {
  primary: true,
  label: 'Button',
  type: 'button',
};

export const Secondary: Story = ({args}) => <Button {...args} />;
Secondary.args = {
  label: 'Button',
};

export const Large: Story = ({args}) => <Button {...args} />;
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small: Story = ({args}) => <Button {...args} />;
Small.args = {
  size: 'small',
  label: 'Button',
};
