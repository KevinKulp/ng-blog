import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostFacade } from '../../store/post/post.facade';
import { Post } from '@ng-blog/domain';

@Component({
  selector: 'app-home',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
  posts$: Observable<Post[]> = this.postFacade.posts$;
  page$: Observable<number>;

  page = 1;

  constructor(private postFacade: PostFacade, public route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.postFacade.loadPosts();

    this.route.params.subscribe((params) => {
      this.page = +params['page'] || this.page;

      // marking for change detection since component is on push
      this.cdr.markForCheck();
    });
  }
}
