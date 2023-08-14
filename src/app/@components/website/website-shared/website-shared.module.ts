import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsSectionComponent } from './results-section/results-section.component';
import { OtherSectionComponent } from './other-section/other-section.component';

@NgModule({
  declarations: [ResultsSectionComponent, OtherSectionComponent],
  imports: [CommonModule],
  exports: [ResultsSectionComponent, OtherSectionComponent],
})
export class WebsiteSharedModule {}
