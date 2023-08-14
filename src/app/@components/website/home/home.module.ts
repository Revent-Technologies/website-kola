import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeIntroductionComponent } from './home-introduction/home-introduction.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomePerformanceComponent } from './home-performance/home-performance.component';
import { HomeClientsComponent } from './home-clients/home-clients.component';
import { HomeBlogsComponent } from './home-blogs/home-blogs.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    HomeIntroductionComponent,
    HomeServicesComponent,
    HomePerformanceComponent,
    HomeClientsComponent,
    HomeBlogsComponent,
    HomeAboutComponent,
    HomeHeaderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MatMenuModule, MatButtonModule],
})
export class HomeModule {}
