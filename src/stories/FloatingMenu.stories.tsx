import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import { CartItemPreview, FloatingMenu } from '../scentronix-ui';

const meta = {
  title: 'Components/FloatingMenu',
  component: FloatingMenu,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof FloatingMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateLabel = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <ShoppingBasketOutlinedIcon fontSize='small' /> Buy
  </div>
);

export const SingleMenus: Story = {
  args: {
    hasOverlay: true,
    label: 'Buy',
    children: (
      <>
        <CartItemPreview
          icon={''}
          title={'50ml'}
          price={'$80.00'}
          description={'A description of the product'}
          tag={'New'}
          inheritTheme={false}></CartItemPreview>
      </>
    ),
  },
};

export const MultipleMenus: Story = {
  args: {
    hasOverlay: true,
    label: <TemplateLabel />,
    children: (
      <>
        <CartItemPreview
          icon={''}
          title={'50ml'}
          price={'$80.00'}
          description={'A description of the product'}
          tag={'New'}
          inheritTheme={false}></CartItemPreview>
        <CartItemPreview
          icon={''}
          title={'100ml'}
          price={'$150.00'}
          tag={'Sale'}
          inheritTheme={false}></CartItemPreview>
        <CartItemPreview
          icon={''}
          title={'250ml'}
          price={'$300.00'}
          description={'A description of the product'}
          inheritTheme={false}></CartItemPreview>
      </>
    ),
  },
};

export const MenusWithoutOverlay: Story = {
  args: {
    hasOverlay: false,
    label: <TemplateLabel />,
    children: (
      <>
        <CartItemPreview
          icon={''}
          title={'50ml'}
          price={'$80.00'}
          description={'A description of the product'}
          tag={'New'}
          inheritTheme={false}></CartItemPreview>
        <CartItemPreview
          icon={''}
          title={'100ml'}
          price={'$150.00'}
          tag={'Sale'}
          inheritTheme={false}></CartItemPreview>
        <CartItemPreview
          icon={''}
          title={'250ml'}
          price={'$300.00'}
          description={'A description of the product'}
          inheritTheme={false}></CartItemPreview>
      </>
    ),
  },
};

export const MenuWithInheritedTheme: Story = {
  args: {
    inheritTheme: true,
    hasOverlay: true,
    label: <TemplateLabel />,
    children: (
      <>
        <CartItemPreview
          icon={''}
          title={'50ml'}
          price={'$80.00'}
          description={'A description of the product'}
          tag={'New'}
          inheritTheme={true}></CartItemPreview>
      </>
    ),
  },
};
