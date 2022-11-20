import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SinglePostModule } from '../../shared/components/single-post/single-post.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NewPostContainerComponent } from './new-post/new-post-container.component';
import { NewPostComponent } from './new-post/new-post.component';



@NgModule({
  declarations: [
    NewPostContainerComponent,
    NewPostComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        SinglePostModule
    ]
})
export class AdminModule { }
