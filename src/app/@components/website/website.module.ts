import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { FormsModule } from '@angular/forms';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
  declarations: [WebsiteComponent],
  imports: [CommonModule, FormsModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
