import React, { FC } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material'

import { BlogPost } from '@nest-react/domain'

interface BlogCardProps {
  post: BlogPost
}

export const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography
            variant="caption"
            color="primary"
            sx={{ fontFamily: 'monospace' }}>
            ID: {post.id.toString().padStart(4, '0')}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontFamily: 'monospace' }}>
            {post.date}
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="text.primary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {post.summary}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {post.tags.map(tag => (
            <Chip
              key={tag}
              label={`#${tag}`}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                borderRadius: 0,
                border: '1px solid rgba(112, 0, 255, 0.5)',
                color: 'secondary.main',
                backgroundColor: 'transparent',
              }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button size="small" color="primary">
          READ_DATA
        </Button>
      </CardActions>
    </Card>
  )
}
