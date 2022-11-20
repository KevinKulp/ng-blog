import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPostContainerComponent } from './full-post-container.component';

const routes: Routes = [
  {
    path: '',
    component: FullPostContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPostRoutingModule { }
