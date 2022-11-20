import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { environment } from '../environments/environment';
import { PostService } from './post/post.service';

@Controller('')
export class AppController {
  constructor(private readonly postService: PostService) {}

  @Get()
  rehydrate(): { status: string } {
    if (!environment.production) {
      this.postService.hydratePosts();
      return { status: 'success' };
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
