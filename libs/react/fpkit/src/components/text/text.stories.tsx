import { StoryObj, Meta } from '@storybook/react';
/**
 * Import testing library dependencies
 */
import { within, userEvent } from '@storybook/testing-library'

/**
 * Import jest matchers
 */
import { expect } from '@storybook/jest'

import {Text} from './text';

const meta: Meta<typeof Text> = {
    title: 'FP.React Components/Content/Text',
    component: Text
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: StoryObj<typeof Text> = {
    args: {
      // @ts-ignore
      children: 'Default Text',
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement)
      const text = canvas.getByText('Default Text')
      expect(text).toBeInTheDocument()
    }
};
