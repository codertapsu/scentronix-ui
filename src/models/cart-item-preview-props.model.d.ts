import { BaseProps } from './base-props.model';

export interface CartItemPreviewProps extends BaseProps {
  icon?: React.ReactNode;
  title: string;
  price: string;
  description?: React.ReactNode;
  tag?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
