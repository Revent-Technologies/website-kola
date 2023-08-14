import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VybecashComponent } from './vybecash.component';
import { VybecashLandingComponent } from './vybecash-landing/vybecash-landing.component';
import { VybecashOverviewComponent } from './vybecash-overview/vybecash-overview.component';
import { VybecashTimelineComponent } from './vybecash-timeline/vybecash-timeline.component';
import { VybecashFeaturesComponent } from './vybecash-features/vybecash-features.component';
import { WebsiteSharedModule } from '../website-shared/website-shared.module';
import { VybecashHeaderComponent } from './vybecash-header/vybecash-header.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    VybecashComponent,
    VybecashLandingComponent,
    VybecashOverviewComponent,
    VybecashTimelineComponent,
    VybecashFeaturesComponent,
    VybecashHeaderComponent,
  ],
  imports: [
    CommonModule,
    WebsiteSharedModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class VybecashModule {}
