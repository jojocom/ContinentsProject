import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesFilteredService } from '../services/countriesFiltered.service';
import { CountryFiltered } from '../models/countryFiltered';
import { Observable, catchError, of } from 'rxjs';
import { RegionService } from '../../regions/services/region.service'; 
import { Region } from '../../regions/models/region';

@Component({
  selector: 'app-countriesFiltered',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countriesFiltered.component.html'
})
export class CountriesFilteredComponent implements OnInit {

  countriesFiltered$!: Observable<CountryFiltered[]>;
  regions$!: Observable<Region[]>;
  error = false;

  selectedRegionId?: number;
  yearFromInput?: number;
  yearToInput?: number;
  currentPage = 1; 
  pageSize = 10;
  
constructor(
  private countriesFilteredService: CountriesFilteredService,
  private regionService: RegionService) {}


	ngOnInit(): void {
		this.regions$ = this.regionService.getAllRegions().pipe( catchError(err => { 
			console.error(err); 
				this.error = true; 
				return of([]); }) ); 
		this.loadFilteredCountries(); }

  
	applyFilters(): void {
		this.currentPage = 1; // reset to first page when filters change
		this.loadFilteredCountries(this.selectedRegionId, this.yearFromInput, this.yearToInput);
	}

	goToPage(page: number): void { 
	  if (page < 1) return; 
	  this.currentPage = page; 
	  this.loadFilteredCountries(this.selectedRegionId, this.yearFromInput, this.yearToInput, this.currentPage, this.pageSize); 
	}

	private loadFilteredCountries(regionId?: number, yearFrom?: number, yearTo?: number, page: number = 1, size: number = 10): void { 
		this.countriesFiltered$ = this.countriesFilteredService.getCountriesFiltered(regionId, yearFrom, yearTo, page, size).pipe(
			catchError(err => { 
				console.error(err); 
				this.error = true; 
				return of([]); 
			}) 
		);
	}
}
