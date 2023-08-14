import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afrexim-header',
  templateUrl: './afrexim-header.component.html',
  styleUrls: ['./afrexim-header.component.scss'],
})
export class AfreximHeaderComponent {
  constructor(private route: Router) {}

  navigateTo(route: string) {
    this.route.navigate([route]);
  }
}
