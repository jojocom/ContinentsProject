import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../models/language';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getLanguagesByCountry(countryId: number): Observable<Language[]> {
    return this.http.get<Language[]>(
      `${this.apiUrl}/countries/${countryId}/languages`
    );
  }
}
