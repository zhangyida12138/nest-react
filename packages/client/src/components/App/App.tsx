import React, { FC, useEffect, useState } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { API_URL } from '~/config'
import { Logger, checkServerVersion } from '~/utils'
import { theme } from '~/theme'
import { Layout } from '~/components/Layout/Layout'
import { BlogList } from '~/components/Blog/BlogList'

export const App: FC<unknown> = () => {
  const [response, setResponse] = useState<string>('NO SERVER RESPONSE')

  useEffect(() => {
    async function fetchResponse(): Promise<void> {
      try {
        const res = await fetch(API_URL)
        const data = await res.text()
        setResponse(data)
      } catch (err) {
        Logger.error(err)
      }
    }

    fetchResponse()
  }, [])

  useEffect(() => {
    checkServerVersion()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <BlogList />
        <Box
          sx={{
            mt: 4,
            p: 2,
            border: '1px solid #333',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: '#666',
            display: 'none', // 默认隐藏，但在代码中保留以消除未使用变量警告
          }}>
          SYSTEM STATUS: {response}
        </Box>
      </Layout>
    </ThemeProvider>
  )
}
