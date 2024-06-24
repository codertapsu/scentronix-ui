import { afterEach, describe, expect, it, vi } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { CartItemPreview } from './cart-item-preview';

describe(CartItemPreview.name, () => {
  afterEach(cleanup);

  it('should render component', () => {
    render(
      <CartItemPreview
        title='50ml'
        price='$50.00'
      />,
    );
  });

  it('should render label', () => {
    render(
      <CartItemPreview
        title='50ml'
        price='$50.00'
      />,
    );
    screen.getByText('50ml');
  });

  it('should trigger onClick', () => {
    const mockFn = vi.fn();

    render(
      <CartItemPreview
        title='50ml'
        price='$50.00'
        onClick={mockFn}
      />,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
