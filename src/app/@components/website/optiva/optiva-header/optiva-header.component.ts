import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optiva-header',
  templateUrl: './optiva-header.component.html',
  styleUrls: ['./optiva-header.component.scss'],
})
export class OptivaHeaderComponent {
  constructor(private route: Router) {}

  navigateTo(route: string) {
    this.route.navigate([route]);
  }
}
