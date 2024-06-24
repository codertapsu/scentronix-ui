import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { ButtonBase } from '@mui/material';
import Card from '@mui/material/Card';
import { ThemeProvider, useTheme } from '@mui/material/styles';

import { CartItemPreviewProps } from '../../models/cart-item-preview-props.model';
import { customMuiTheme } from '../../theme';

import styles from './cart-item-preview.module.scss';

export const CartItemPreview = ({
  icon,
  title,
  price,
  description,
  tag,
  onClick,
  inheritTheme,
}: CartItemPreviewProps) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={inheritTheme ? theme : customMuiTheme}>
      <Card>
        <ButtonBase
          sx={{ width: '100%' }}
          role='button'
          onClick={event => {
            if (onClick) {
              onClick(event);
            }
          }}>
          <div className={styles.container}>
            <div className={styles.summary}>
              <span>{icon || <ShoppingBasketOutlinedIcon fontSize='small' />}</span>
              <span>
                <strong>{title}</strong>
              </span>
              <span>
                <strong>{price}</strong>
              </span>
            </div>
            {!!description && (
              <div className={styles.description}>
                <small>{description}</small>
              </div>
            )}
            {!!tag && (
              <div className={styles.tag}>
                <small>{tag}</small>
              </div>
            )}
          </div>
        </ButtonBase>
      </Card>
    </ThemeProvider>
  );
};
