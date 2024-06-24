import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CartItemPreview } from '../scentronix-ui';

const meta = {
  title: 'Components/CartItemPreview',
  component: CartItemPreview,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CartItemPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullState: Story = {
  args: {
    inheritTheme: false,
    title: '50ml',
    price: '$80.00',
    description: 'A description of the product',
    tag: 'New',
  },
};

export const MissingDescription: Story = {
  args: {
    inheritTheme: false,
    title: '100ml',
    price: '$150.00',
    tag: 'Sale',
  },
};

export const MissingTag: Story = {
  args: {
    inheritTheme: false,
    title: '250ml',
    price: '$300.00',
    description: 'A description of the product',
  },
};

export const OnlyTitleAndPrice: Story = {
  args: {
    inheritTheme: false,
    title: '500ml',
    price: '$500.00',
  },
};

export const InheritTheme: Story = {
  args: {
    inheritTheme: true,
    title: '1L',
    price: '$1,000.00',
    description: 'A description of the product',
    tag: 'New',
  },
};
