import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorModule } from '../loading-indicator/loading-indicator.module';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultTemplateContainerComponent } from './default-template-container.component';



@NgModule({
  declarations: [DefaultTemplateContainerComponent, DefaultHeaderComponent, DefaultFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingIndicatorModule
  ]
})
export class DefaultTemplateModule { }
