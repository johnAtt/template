import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#264653',
    },
    secondary: {
      main: '#2a9d8f',
    },
    error: {
      main: '#e76f51',
    },
    background: {
      default: '#f1faee',
      paper: '#f4a261',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #1d3557 30%, #457b9d 90%)',
          borderBottom: '1px solid #f4a261',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        startIcon: {
          color: '#f4a261',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#f1faee',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#2a9d8f',
            color: '#f1faee',
          },
        },
      },
    },
  },
});
export const navStyles = (drawerOpen: boolean) => ({
  width: { sm: 310 },
  flexShrink: { sm: 0 },
  zIndex: 1250,
  position: 'fixed',
  left: drawerOpen ? 0 : '-310px',
  top: '64px',
  height: `calc(100% - 64px)`,
  display: 'block',
  overflowX: 'hidden',
  borderRight: '1px solid #f4a261',
  transition: 'left 0.3s ease',
  backgroundColor: '#ffffff',
});


export const footerStyles = {
  width: '100%',
  mt: 4,
  py: 2,
  backgroundColor: '#ffff'
};

export const mapContainerStyles = {
  marginTop: '2%',
  marginBottom: '4%',
  textAlign: 'center',
};

export const contactInfoStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  p: 2,
  minHeight: '200px',
  backgroundColor: '#ffff',
};

export const galleryGridStyles = {
  paddingBottom: '10%',
  textAlign: 'center',
};

export const homeBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 4,

};


export const detailsBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 2,
  paddingTop: '10%',
  paddingBottom: '10%',
};