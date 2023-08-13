import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [ResultsComponent, OtherComponent],
  imports: [CommonModule],
  exports: [ResultsComponent, OtherComponent],
})
export class SharedModule {}
