import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentService } from '../services/continent.service';
import { Continent } from '../models/continent';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-continents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './continents.component.html'
})
export class ContinentsComponent implements OnInit {

  continents$!: Observable<Continent[]>;
  error = false;  // <-- add this property

  constructor(private continentService: ContinentService) {}

  ngOnInit(): void {
    this.continents$ = this.continentService.getContinents().pipe(
      catchError(err => {
        console.error('Error loading continents:', err);
        this.error = true;  // <-- set error if request fails
        return of([]);
      })
    );
  }
}
