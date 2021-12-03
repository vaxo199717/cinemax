import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { MovieData } from 'src/app/interfaces/movie-data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: MovieData[] = [];
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getData()
      .subscribe(
        response => {
          this.movies = response;
        }
      )
  }

}
