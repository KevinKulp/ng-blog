import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest, mergeMap, Observable, of } from 'rxjs';
import { PostFacade } from '../../../store/post/post.facade';

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template-container.component.html',
  styleUrls: ['./default-template-container.component.scss'],
})
export class DefaultTemplateContainerComponent implements OnInit {
  showSpinner$: Observable<boolean>;
  showLoader: boolean;
  constructor(public postFacade: PostFacade, public cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.showSpinner$ = combineLatest([this.postFacade.postsLoading$, this.postFacade.postLoading$])
      .pipe(
        mergeMap(([posts, post]) => of(posts || post))
      );

    // trigger change detection to show/hide spinner
    this.showSpinner$.subscribe((loading) => {
      this.cdr.detectChanges();
    })

  }
}
