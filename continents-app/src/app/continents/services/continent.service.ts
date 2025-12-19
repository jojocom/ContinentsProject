import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Continent } from '../models/continent';



@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  private baseUrl = '/api/continents';

  constructor(private http: HttpClient) {}

  getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>('http://localhost:8080/continents');
  }
}
