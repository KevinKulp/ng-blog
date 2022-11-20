import { Test } from '@nestjs/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [PostService],
    }).compile();

    service = app.get<PostService>(PostService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
