import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VybecashComponent } from './vybecash.component';
import { VybecashLandingComponent } from './vybecash-landing/vybecash-landing.component';
import { VybecashOverviewComponent } from './vybecash-overview/vybecash-overview.component';
import { VybecashTimelineComponent } from './vybecash-timeline/vybecash-timeline.component';
import { VybecashFeaturesComponent } from './vybecash-features/vybecash-features.component';

@NgModule({
  declarations: [
    VybecashComponent,
    VybecashLandingComponent,
    VybecashOverviewComponent,
    VybecashTimelineComponent,
    VybecashFeaturesComponent,
  ],
  imports: [CommonModule],
})
export class VybecashModule {}