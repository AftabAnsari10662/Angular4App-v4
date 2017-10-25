import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from '@angular/core';

import { Movie } from "./Movie";
@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html"
})
@Injectable()
export class MovieList {
  movies: Movie[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("./movies.json").subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
}
