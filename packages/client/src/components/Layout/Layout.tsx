import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
          backdropFilter: 'blur(5px)',
        }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              letterSpacing: '.2rem',
              color: 'primary.main',
            }}>
            [TECH_BLOG]
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ mx: 2, '&:hover': { color: 'primary.main' } }}>
            HOME
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ mx: 2, '&:hover': { color: 'primary.main' } }}>
            ABOUT
          </Link>
          <Link
            href="https://github.com/zhangyida12138"
            color="inherit"
            underline="none"
            sx={{ mx: 2, '&:hover': { color: 'primary.main' } }}>
            GITHUB
          </Link>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          borderTop: '1px solid rgba(0, 243, 255, 0.1)',
          textAlign: 'center',
        }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: 'monospace' }}>
          © {new Date().getFullYear()} TECH_BLOG SYSTEM // SYSTEM.READY
        </Typography>
      </Box>
    </Box>
  )
}
