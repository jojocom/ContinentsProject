import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryFiltered } from '../models/countryFiltered';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesFilteredService {

  private apiUrl = 'http://localhost:8080/countries-filtered';

  constructor(private http: HttpClient) {}

	getCountriesFiltered(
	  regionId?: number,
	  yearFrom?: number,
	  yearTo?: number,
	  page: number = 0,
	  size: number = 10
	): Observable<CountryFiltered[]> {
	  let params = new HttpParams()
		.set('page', page.toString())
		.set('size', size.toString());

	  if (regionId != null) {
		params = params.set('regionId', regionId.toString());
	  }
	  if (yearFrom != null) {
		params = params.set('yearFrom', yearFrom.toString());
	  }
	  if (yearTo != null) {
		params = params.set('yearTo', yearTo.toString());
	  }

	  return this.http.get<CountryFiltered[]>(this.apiUrl, { params });
	}


}
