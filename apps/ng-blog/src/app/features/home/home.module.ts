import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../../shared/components/link/link.module';
import { SinglePostModule } from '../../shared/components/single-post/single-post.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContainerComponent } from './home-container.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SinglePostModule,
    LinkModule
  ]
})
export class HomeModule { }
