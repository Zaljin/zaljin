import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SAMPLE_FEATURE_KEY,
  initialState as sampleInitialState,
  sampleReducer
} from './+state/sample.reducer';
import { SampleEffects } from './+state/sample.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SAMPLE_FEATURE_KEY, sampleReducer, {
      initialState: sampleInitialState
    }),
    EffectsModule.forFeature([SampleEffects])
  ]
})
export class SampleModule {}
