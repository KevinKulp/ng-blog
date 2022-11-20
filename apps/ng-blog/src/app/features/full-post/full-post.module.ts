import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostModule } from '../../shared/components/single-post/single-post.module';
import { FullPostRoutingModule } from './full-post-routing.module';
import { FullPostContainerComponent } from './full-post-container.component';



@NgModule({
  declarations: [
    FullPostContainerComponent
  ],
  imports: [
    CommonModule,
    FullPostRoutingModule,
    SinglePostModule
  ]
})
export class FullPostModule { }
