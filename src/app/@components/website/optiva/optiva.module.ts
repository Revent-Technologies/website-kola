import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptivaComponent } from './optiva.component';
import { OptivaLandingComponent } from './optiva-landing/optiva-landing.component';
import { OptivaHeaderComponent } from './optiva-header/optiva-header.component';
import { RouterModule } from '@angular/router';
import { OptivaOverviewComponent } from './optiva-overview/optiva-overview.component';
import { OptivaResearchComponent } from './optiva-research/optiva-research.component';
import { WebsiteSharedModule } from '../website-shared/website-shared.module';
import { OptivaOtherComponent } from './optiva-other/optiva-other.component';
import { OptivaFeaturesComponent } from './optiva-features/optiva-features.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    OptivaComponent,
    OptivaLandingComponent,
    OptivaHeaderComponent,
    OptivaOverviewComponent,
    OptivaResearchComponent,
    OptivaOtherComponent,
    OptivaFeaturesComponent,
  ],
  imports: [
    CommonModule,
    WebsiteSharedModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class OptivaModule {}
