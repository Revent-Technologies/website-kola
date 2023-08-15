import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';
import { VybecashComponent } from './vybecash/vybecash.component';
import { OptivaComponent } from './optiva/optiva.component';
import { AfreximComponent } from './afrexim/afrexim.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'vybecash', component: VybecashComponent },
      { path: 'optiva', component: OptivaComponent },
      { path: 'afrexim', component: AfreximComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
