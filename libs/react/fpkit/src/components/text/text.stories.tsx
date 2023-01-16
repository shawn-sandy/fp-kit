import { StoryObj, Meta } from '@storybook/react';

import {Text} from './text';

const meta: Meta<typeof Text> = {
    title: 'FP.React Components/Text',
    component: Text
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextComponent: Story = {};
