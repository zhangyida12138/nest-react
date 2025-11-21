import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BlogPost } from '@nest-react/domain';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAll(): BlogPost[] {
    return this.postsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): BlogPost | undefined {
    return this.postsService.getOne(id);
  }
}

