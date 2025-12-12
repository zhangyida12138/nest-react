import { Box, Link, Typography } from '@mui/material'
import React, { FC } from 'react'

export const WebFooter: FC = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', borderTop: '1px solid rgba(0, 243, 255, 0.1)', textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                © {new Date().getFullYear()} IKE&apos;s Blog
                <Link
                    href="https://github.com/zhangyida12138"
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                    underline="none"
                    sx={{ mx: 2, "&:hover": { color: "primary.main" } }}
                >
                    https://github.com/zhangyida12138
                </Link>
            </Typography>
        </Box>
    )
}