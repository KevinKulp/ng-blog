import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostEffects } from './post.effects';
import { postFeatureKey, reducer } from './post.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(postFeatureKey, reducer),
    EffectsModule.forFeature([PostEffects]),
    HttpClientModule
  ]
})
export class PostStoreModule { }
