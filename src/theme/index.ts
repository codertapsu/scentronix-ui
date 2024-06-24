import { createTheme } from '@mui/material/styles';

const customMuiTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: 'var(--scentronix-black)',
            color: 'var(--scentronix-white)',
            '&:hover': {
              backgroundColor: 'var(--scentronix-white)',
              color: 'var(--scentronix-black)',
            },
          },
        },
      ],
    },
    MuiFab: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: 'var(--scentronix-white)',
            color: 'var(--scentronix-black)',
            '&:hover': {
              backgroundColor: 'var(--scentronix-black)',
              color: 'var(--scentronix-white)',
            },
          },
        },
      ],
    },
  },
});

export { customMuiTheme };
