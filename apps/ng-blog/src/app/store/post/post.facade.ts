import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPosts, loadPost } from './post.actions';
import type { Post } from '@ng-blog/domain';
import { State } from './post.reducer';
import {
  selectPostError,
  selectPostLoading,
  selectPosts,
  selectPostsError,
  selectPostsLoading
} from './post.selectors';

@Injectable({
  providedIn: 'root'
})
export class PostFacade {
  posts$: Observable<Post[]> = this.store.select(selectPosts);
  postsLoading$: Observable<boolean> = this.store.select(selectPostsLoading);
  postsError$: Observable<boolean> = this.store.select(selectPostsError);
  postLoading$: Observable<boolean> = this.store.select(selectPostLoading);
  postError$: Observable<boolean> = this.store.select(selectPostError);

  constructor(private store: Store<State>) {}

  loadPosts(): void {
    this.store.dispatch(loadPosts());
  }

  loadPost(permalink: string): void {
    this.store.dispatch(loadPost({ permalink }));
  }
}
