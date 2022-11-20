import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PostActions from './post.actions';
import { PostFacade } from './post.facade';
import { PostService } from './post.service';


@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PostActions.loadPosts),
      withLatestFrom(this.postFacade.posts$),
      concatMap(([, posts]) =>{
        if (posts.length > 1) {
          return of(PostActions.loadPostsSuccess({ posts }))
        } else {
          return this.postService.loadPosts().pipe(
            map(response => PostActions.loadPostsSuccess({ posts: response.posts })),
            catchError(() => of(PostActions.loadPostsFailure()))
          )
        }
      })
    );
  });

  loadPost$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PostActions.loadPost),
      withLatestFrom(this.postFacade.posts$),
      concatMap(([action, posts]) =>{
        const foundPost = posts.find(post => post.permalink === action.permalink);
        if (foundPost) {
          return of(PostActions.loadPostSuccess({ post: foundPost }))
        } else {
          return this.postService.loadPost(action.permalink).pipe(
            map(response => PostActions.loadPostSuccess({ post: response })),
            catchError(() => of(PostActions.loadPostFailure()))
          )
        }
      })
    );
  });


  constructor(private actions$: Actions, private postService: PostService, private postFacade: PostFacade) {}
}
