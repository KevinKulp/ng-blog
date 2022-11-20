import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import type { Post } from '@ng-blog/domain';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnChanges {
  @Input() posts: Post[];
  @Input() page: number;

  PAGE_LENGTH = 5;
  pageNumbers: number[];

  ngOnChanges(): void {
    if (this.posts && this.page) {
      this.setPageNumbers();
    }
  }

  private setPageNumbers(): void {
    this.pageNumbers = Array(this.totalPages).fill(0).map((x,i)=>i + 1);

    this.pageNumbers = this.pageNumbers.slice(Math.max(this.page - 4, 0), this.page + 3);

    if (this.pageNumbers[0] != 1) {
      this.pageNumbers.unshift(-1);
    }

    if (this.pageNumbers[this.pageNumbers.length - 1] !== this.totalPages) {
      this.pageNumbers.push(-1);
    }
  }

  get totalPages(): number {
    return Math.ceil(this.posts.length / this.PAGE_LENGTH);
  }
}
