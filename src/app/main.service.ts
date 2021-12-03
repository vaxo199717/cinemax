import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from './interfaces/movie-data';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<MovieData[]>('assets/data/movies.json');
  }
}
