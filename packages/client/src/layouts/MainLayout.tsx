import { Box, Container } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import { WebFooter, WebHeader } from '~/components'
interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <WebHeader />
            <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                {children}
            </Container>
            <WebFooter />
        </Box>
    )
}   