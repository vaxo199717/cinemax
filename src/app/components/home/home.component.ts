import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/interfaces/movie-data';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:MovieData[] = [];
  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.mainService.getData()
    .subscribe(
      response => {
        this.movies = response;
      }
    )
    
  }

}
