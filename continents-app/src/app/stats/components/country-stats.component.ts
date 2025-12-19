import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsService } from '../services/stats.service';
import { Stat } from '../models/stat';
import { RouterModule } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-countries-stats',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './country-stats.component.html'
})
export class CountriesStatsComponent implements OnInit {

  stats: Stat[] = [];
  error = false;

  constructor(private statsService: StatsService) {}

stats$!: Observable<Stat[]>;

ngOnInit(): void {
  this.stats$ = this.statsService.getAllStats().pipe(
    catchError(err => {
      console.error(err);
      this.error = true;
      return of([]);
    })
  );
}


}
