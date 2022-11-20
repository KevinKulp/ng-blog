import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import {
  DefaultTemplateContainerComponent
} from './shared/components/default-template/default-template-container.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultTemplateContainerComponent,
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'page/:page',
    component: DefaultTemplateContainerComponent,
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'admin',
    component: DefaultTemplateContainerComponent,
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '**',
    component: DefaultTemplateContainerComponent,
    pathMatch: 'full',
    loadChildren: () => import('./features/full-post/full-post.module').then(m => m.FullPostModule),
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // enable scroll on click of deep link
  scrollPositionRestoration: 'enabled', // scroll to top on route change
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
