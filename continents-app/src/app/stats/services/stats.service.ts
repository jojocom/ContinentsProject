import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private apiUrl = 'http://localhost:8080/countries-stats';

  constructor(private http: HttpClient) {}

  // GET max GDP/population ratio across all countries
  getAllStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.apiUrl}/max-ratio`);
  }

  // GET stats for a specific country
  getStatsByCountry(countryId: number): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.apiUrl}/${countryId}/stats`);
  }
}
