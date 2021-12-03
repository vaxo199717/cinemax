import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/interfaces/movie-data';
import { MainService } from 'src/app/main.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:MovieData[] = [];
  movieId:any;
  constructor(private mainService:MainService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.mainService.getData()
    .subscribe(
      response => {
        this.movies = response;
      }
    )
    this.movieId = this.route.snapshot.params['id'];
    console.log(this.movieId)
  }

}
