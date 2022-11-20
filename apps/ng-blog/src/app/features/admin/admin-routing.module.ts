import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostContainerComponent } from './new-post/new-post-container.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewPostContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
