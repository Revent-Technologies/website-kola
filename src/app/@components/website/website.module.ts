import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { FormsModule } from '@angular/forms';
import { WebsiteRoutingModule } from './website-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { IdeaComponent } from './idea/idea.component';
import { VybecashModule } from './vybecash/vybecash.module';
import { OptivaModule } from './optiva/optiva.module';
import { AfreximModule } from './afrexim/afrexim.module';

@NgModule({
  declarations: [
    WebsiteComponent,
    FooterComponent,
    HeaderComponent,
    IdeaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebsiteRoutingModule,
    HomeModule,
    VybecashModule,
    OptivaModule,
    AfreximModule,
  ],
})
export class WebsiteModule {}
