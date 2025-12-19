import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgIf],
  template: `
    <div class="home-container" style="display: flex; height: 100vh;">
		<nav style="width: 200px; background-color: #f0f0f0; padding: 20px;">
					<ul style="list-style: none; padding: 0;">
			  <li style="margin-bottom: 10px;">
				<a [routerLink]="'/continents'" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Continents</a>
			  </li>
			  <li style="margin-bottom: 10px;">
				<a [routerLink]="'/countries'" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Countries</a>
			  </li>
			  <li style="margin-bottom: 10px;">
				<a routerLink="/countries-stats" routerLinkActive="active-link">Country Stats</a>
			  </li>
			  <li style="margin-bottom: 10px;">
				<a routerLink="/countries-filtered" routerLinkActive="active-link">Countries Filtered</a>
			  </li>
			</ul>
		</nav>

      <div style="flex: 1; padding: 20px;">
        <button *ngIf="!isWelcome()" (click)="goBack()" style="margin-bottom: 20px;">
          ← Back to Welcome
        </button>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class HomeComponent {
  constructor(private router: Router) {
	  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

  goBack() {
    this.router.navigate(['']); // back to Welcome
  }

  isWelcome(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }
}
