import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8080/countries');
  }

  getLanguagesByCountry(code: string): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8080/countries/${code}/languages`
    );
  }
}
