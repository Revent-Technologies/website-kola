import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfreximComponent } from './afrexim.component';
import { AfreximHeaderComponent } from './afrexim-header/afrexim-header.component';
import { AfreximLandingComponent } from './afrexim-landing/afrexim-landing.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AfreximOverviewComponent } from './afrexim-overview/afrexim-overview.component';
import { AfreximTimelineComponent } from './afrexim-timeline/afrexim-timeline.component';
import { AfreximFeaturesComponent } from './afrexim-features/afrexim-features.component';
import { AfreximResultComponent } from './afrexim-result/afrexim-result.component';
import { WebsiteSharedModule } from '../website-shared/website-shared.module';

@NgModule({
  declarations: [
    AfreximComponent,
    AfreximHeaderComponent,
    AfreximLandingComponent,
    AfreximOverviewComponent,
    AfreximTimelineComponent,
    AfreximFeaturesComponent,
    AfreximResultComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    WebsiteSharedModule,
    RouterModule,
  ],
})
export class AfreximModule {}
