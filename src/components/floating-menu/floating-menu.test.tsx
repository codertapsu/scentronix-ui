import { afterEach, describe, expect, it } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { FloatingMenu } from './floating-menu';

import styles from './floating-menu.module.scss';

describe(FloatingMenu.name, () => {
  afterEach(cleanup);

  it('should render component', () => {
    render(<FloatingMenu label='Buy' />);
  });

  it('shows overlay when button is clicked', () => {
    const { container } = render(<FloatingMenu label='Show Overlay' />);
    expect(container.querySelector(`.${styles.overlay}`)).not.toBeInTheDocument();

    const button = screen.getByText('Show Overlay');
    fireEvent.click(button);

    expect(container.querySelector(`.${styles.overlay}`)).toBeInTheDocument();
  });
});
