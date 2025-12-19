import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  constructor(private http: HttpClient) {}

  getAllRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('http://localhost:8080/regions');
  }
}
