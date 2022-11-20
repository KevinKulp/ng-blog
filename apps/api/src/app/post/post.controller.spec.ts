import { Test, TestingModule } from '@nestjs/testing';

import { PostController } from './post.controller';
import { PostService } from './post.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const postController = app.get<PostController>(PostController);
      expect(postController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
