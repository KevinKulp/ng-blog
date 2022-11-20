import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPost from './post.reducer';

export const selectPostState = createFeatureSelector<fromPost.State>(
  fromPost.postFeatureKey
);

export const selectPosts = createSelector(
  selectPostState,
  (postState) => postState.posts
);

export const selectPostsLoading = createSelector(
  selectPostState,
  (postState) => postState.postsLoading
);

export const selectPostsError = createSelector(
  selectPostState,
  (postState) => postState.postsError
);

export const selectPostLoading = createSelector(
  selectPostState,
  (postState) => postState.postLoading
);

export const selectPostError = createSelector(
  selectPostState,
  (postState) => postState.postError
);
