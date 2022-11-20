import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostFacade } from '../../store/post/post.facade';
import { Post } from '@ng-blog/domain';

@Component({
  selector: 'app-full-post-container',
  templateUrl: './full-post-container.component.html',
  styleUrls: ['./full-post-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullPostContainerComponent implements OnInit, OnDestroy {
  postsSub: Subscription;
  post: Post;

  constructor(private postFacade: PostFacade, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    //this.postFacade.loadPosts();
    this.postFacade.loadPost(this.router.url.slice(1).split('#')[0]);

    this.postsSub = this.postFacade.posts$.subscribe((posts: Post[]) => {
      if (posts && posts.length > 0) {
        this.post = posts.find(post => post.permalink == this.router.url.slice(1).split('#')[0])
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
