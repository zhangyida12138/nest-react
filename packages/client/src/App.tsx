import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterView from '~/router'
import { theme } from '~/theme'

export const App: FC<unknown> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </ThemeProvider>
  )
}
