import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { FormsModule } from '@angular/forms';
import { WebsiteRoutingModule } from './website-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [WebsiteComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, FormsModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
