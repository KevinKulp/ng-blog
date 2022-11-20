import { createAction, props } from '@ngrx/store';
import type { Post } from '@ng-blog/domain';

export const loadPosts = createAction(
  '[Posts] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction('[Posts] Load Posts Failure');

export const loadPost = createAction(
  '[Posts] Load Post',
  props<{ permalink: string}>()
);

export const loadPostSuccess = createAction(
  '[Posts] Load Post Success',
  props<{ post: Post }>()
);

export const loadPostFailure = createAction('[Posts] Load Post Failure');
