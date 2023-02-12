import { Injectable } from "@nestjs/common";
import MockData from "../data";

@Injectable()
export class MoviesService {
  private movies = MockData;

  getRandomMovies(): any[] {
    return this.movies.sort(() => 0.5 - Math.random()).slice(0, 10);
  }
}
