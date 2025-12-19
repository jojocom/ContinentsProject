import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {
  countries$!: Observable<Country[]>;
  error = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries().pipe(
      catchError(err => {
        console.error(err);
        this.error = true;
        return of([]);
      })
    );
  }
}



