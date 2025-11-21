import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f3ff', // 霓虹青
    },
    secondary: {
      main: '#7000ff', // 霓虹紫
    },
    background: {
      default: '#050511', // 深空黑
      paper: 'rgba(10, 25, 41, 0.7)', // 半透明深蓝
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: 'linear-gradient(45deg, #00f3ff 30%, #7000ff 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    button: {
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `
            linear-gradient(rgba(5, 5, 17, 0.9), rgba(5, 5, 17, 0.9)),
            linear-gradient(
              0deg,
              transparent 24%,
              rgba(0, 243, 255, 0.05) 25%,
              rgba(0, 243, 255, 0.05) 26%,
              transparent 27%,
              transparent 74%,
              rgba(0, 243, 255, 0.05) 75%,
              rgba(0, 243, 255, 0.05) 76%,
              transparent 77%,
              transparent
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              rgba(0, 243, 255, 0.05) 25%,
              rgba(0, 243, 255, 0.05) 26%,
              transparent 27%,
              transparent 74%,
              rgba(0, 243, 255, 0.05) 75%,
              rgba(0, 243, 255, 0.05) 76%,
              transparent 77%,
              transparent
            )
          `,
          backgroundSize: '100% 100%, 50px 50px, 50px 50px',
          minHeight: '100vh',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 243, 255, 0.1)',
          boxShadow: '0 0 10px rgba(0, 243, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)',
            border: '1px solid rgba(0, 243, 255, 0.5)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid rgba(0, 243, 255, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 243, 255, 0.1)',
            boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00f3ff 30%, #7000ff 90%)',
          color: '#fff',
          border: 'none',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)',
          },
        },
      },
    },
  },
})
