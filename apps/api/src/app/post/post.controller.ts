import { Controller, Get, Param } from '@nestjs/common';
import { Post } from '@ng-blog/domain';
import { Observable } from 'rxjs';

import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(): Observable<{ posts: Post[]}> {
    return this.postService.getAllPosts();
  }

  @Get(':permalink')
  getPost(@Param() params: { permalink: string }): Observable<Post> {
    return this.postService.getPost(params.permalink)
  }
}
