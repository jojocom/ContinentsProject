import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { Language } from '../models/language';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Languages</h2>

    <ng-container *ngIf="languages$ | async as languages; else loading">
      <ul>
        <li *ngFor="let lang of languages">
          {{ lang.language }}
        </li>
      </ul>
    </ng-container>

    <ng-template #loading>
      <p *ngIf="!error">Loading...</p>
      <p *ngIf="error" style="color:red;">Failed to load languages</p>
    </ng-template>
  `
})
export class CountryLanguagesComponent implements OnInit {
  languages$!: Observable<Language[]>;
  error = false;

  constructor(private route: ActivatedRoute, private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languages$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        this.error = false;
        return this.languageService.getLanguagesByCountry(id).pipe(
          catchError(err => {
            console.error(err);
            this.error = true;
            return of([]);
          })
        );
      })
    );
  }
}
