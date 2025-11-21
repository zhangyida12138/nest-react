import React, { FC, useEffect, useState } from 'react'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { BlogPost } from '@nest-react/domain'
import { API_URL } from '~/config'
import { Logger } from '~/utils'
import { BlogCard } from './BlogCard'

export const BlogList: FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        async function fetchPosts(): Promise<void> {
            try {
                const res = await fetch(`${API_URL}/posts`)
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                const data: BlogPost[] = await res.json()
                setPosts(data)
            } catch (err) {
                Logger.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <Box>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h1" gutterBottom>
                    SYSTEM LOGS
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: 'auto', fontFamily: 'monospace' }}>
                    记录最新的技术探索、代码片段和系统架构思考。
                </Typography>
            </Box>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                    <CircularProgress color="primary" />
                </Box>
            ) : (
                <Grid container spacing={4}>
                    {posts.map(post => (
                        <Grid key={post.id} xs={12} sm={6} md={4}>
                            <BlogCard post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    )
}
