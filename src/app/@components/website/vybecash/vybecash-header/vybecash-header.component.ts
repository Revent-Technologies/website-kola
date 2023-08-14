import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vybecash-header',
  templateUrl: './vybecash-header.component.html',
  styleUrls: ['./vybecash-header.component.scss'],
})
export class VybecashHeaderComponent {
  constructor(private route: Router) {}

  navigateTo(route: string) {
    this.route.navigate([route]);
  }
}
