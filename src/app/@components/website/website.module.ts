import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { FormsModule } from '@angular/forms';
import { WebsiteRoutingModule } from './website-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [WebsiteComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, WebsiteRoutingModule, HomeModule],
})
export class WebsiteModule {}
