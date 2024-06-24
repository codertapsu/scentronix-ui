import { useEffect, useRef, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import { ThemeProvider, useTheme } from '@mui/material/styles';

import { useEventListener } from '../../hooks/use-event-listener';
import { ConnectedPosition } from '../../models/connected-position.model';
import { FloatingMenuProps } from '../../models/floating-menu-props.model';
import { customMuiTheme } from '../../theme';

import styles from './floating-menu.module.scss';

export const FloatingMenu = ({ hasOverlay = true, label, children, inheritTheme }: FloatingMenuProps) => {
  const theme = useTheme();

  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<ConnectedPosition>({
    top: 0,
    right: 'auto',
    bottom: 'auto',
    left: 0,
  });

  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
  };
  const startAnimation = () => {
    const menuElement = menuContainerRef.current!;
    const fadeOutDownKeyframes = [
      {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateY(0)',
      },
      {
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateY(8px)',
      },
    ];
    const animation = menuElement.animate(fadeOutDownKeyframes, {
      duration: 300,
      easing: 'ease',
      fill: 'forwards',
    });
    animation.onfinish = () => {
      closeMenu();
    };
  };
  const resetPosition = () => {
    if (menuContainerRef.current && closeButtonRef.current) {
      const defaultSpacing = window.getComputedStyle(document.documentElement).getPropertyValue('--scentronix-spacing');
      const gap = defaultSpacing ? parseInt(defaultSpacing, 10) * 2 : 16;
      const buttonRect = closeButtonRef.current.getBoundingClientRect();
      const menuRect = menuContainerRef.current.getBoundingClientRect();
      let bottom: number | string = buttonRect.bottom - buttonRect.height;
      let top: number | string = 'auto';
      let right: number | string = buttonRect.right + gap;
      let left: number | string = 'auto';
      const isMenuOverlappingTopPartOfScreen = buttonRect.bottom - menuRect.height < gap;
      if (isMenuOverlappingTopPartOfScreen) {
        top = gap;
        bottom = 'auto';
      }
      const isMenuOverlappingLeftPartOfScreen = buttonRect.left - menuRect.width < gap * 2;
      if (isMenuOverlappingLeftPartOfScreen) {
        right = 'auto';
        left = buttonRect.left + buttonRect.width + gap;
      }
      setPosition({
        top,
        left,
        right,
        bottom,
      });
    }
  };

  useEffect(() => {
    resetPosition();
  }, [visible]);

  useEventListener(
    'click',
    event => {
      if (visible && event.currentTarget === overlayRef.current) {
        startAnimation();
      }
    },
    overlayRef.current!,
  );

  useEventListener('keyup', event => {
    if (visible && (event as KeyboardEvent).key === 'Escape') {
      startAnimation();
    }
  });

  useEventListener('resize', resetPosition);

  return (
    <ThemeProvider theme={inheritTheme ? theme : customMuiTheme}>
      <>
        {!visible && (
          <Button
            variant='contained'
            color='primary'
            onClick={openMenu}>
            {label}
          </Button>
        )}
        {visible && (
          <Fab
            ref={closeButtonRef}
            color='primary'
            aria-label='add'
            size='small'
            onClick={startAnimation}>
            <CloseIcon fontSize='small' />
          </Fab>
        )}
        {visible && (
          <div
            ref={menuContainerRef}
            className={styles.menuContainer}
            style={{
              top: position.top,
              right: position.right,
              bottom: position.bottom,
              left: position.left,
            }}>
            {children}
          </div>
        )}
        {hasOverlay && visible && (
          <div
            ref={overlayRef}
            className={styles.overlay}></div>
        )}
      </>
    </ThemeProvider>
  );
};
