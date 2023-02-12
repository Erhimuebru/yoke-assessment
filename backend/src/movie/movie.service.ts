import { Injectable } from "@nestjs/common";
import { Movie } from "./schemas/movie.schema";
import { MovieRepository } from "./movie.repository";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MovieService {
  movies: any;
  constructor(private readonly movieRepository: MovieRepository) {}

  async getMovieById(id: string): Promise<Movie> {
    return this.movieRepository.findOne({ id });
  }

  async getMovies(): Promise<Movie[]> {
    return this.movieRepository.find({});
  }

  async createMovie(title: string, image: string): Promise<Movie> {
    return this.movieRepository.create({
      title,
      image,
      id: undefined,
    });
  }

  async updateMovie(id: string, movieUpdates: UpdateMovieDto): Promise<Movie> {
    return this.movieRepository.findOneAndUpdate({ id }, movieUpdates);
  }

  getRandomMovies(): Promise<Movie[]> {
    return Promise.resolve(
      Array.from(
        { length: 10 },
        () => this.movies[Math.floor(Math.random() * this.movies.length)]
      )
    );
  }
}
