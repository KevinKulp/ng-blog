import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkModule } from '../link/link.module';
import { SinglePostComponent } from './single-post.component';



@NgModule({
  declarations: [
    SinglePostComponent
  ],
  exports: [SinglePostComponent],
  imports: [
    CommonModule,
    LinkModule,
    RouterModule
  ]
})
export class SinglePostModule { }
