import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptivaComponent } from './optiva.component';
import { OptivaLandingComponent } from './optiva-landing/optiva-landing.component';

@NgModule({
  declarations: [OptivaComponent, OptivaLandingComponent],
  imports: [CommonModule],
})
export class OptivaModule {}
