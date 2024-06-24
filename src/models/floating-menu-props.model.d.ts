import { ReactNode } from 'react';

import { BaseProps } from './base-props.model';

export interface FloatingMenuProps extends BaseProps {
  hasOverlay?: boolean;
  label: ReactNode;
  onClick?: () => void;
}
