import { StoryObj, Meta } from '@storybook/react';
/**
 * Import testing library dependencies
 */
import { within, userEvent } from '@storybook/testing-library'

/**
 * Import jest matchers
 */
import { expect } from '@storybook/jest'

import {Title} from './text';

const meta: Meta<typeof Title> = {
    title: 'FP.React Components/Title',
    component: Title
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: StoryObj<typeof Title> = {
    args: {
      // @ts-ignore
      children: 'Default Title',
      elm: 'h1'
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement)
      const text = canvas.getByRole('heading')
      expect(text).toBeInTheDocument()
    }
};
