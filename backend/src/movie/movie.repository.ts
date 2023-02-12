import { Injectable } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { FilterQuery, Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Movie, MovieDocument } from "./schemas/movie.schema";

@Injectable()
export class MovieRepository {
  [x: string]: any;
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<MovieDocument>
  ) {}

  async findOne(movieFilterQuery: FilterQuery<Movie>): Promise<Movie> {
    return this.movieModel.findOne(movieFilterQuery);
  }

  async find(movieFilterQuery: FilterQuery<Movie>): Promise<Movie[]> {
    return this.movieModel.find(movieFilterQuery);
  }

  async create(movie: Movie): Promise<Movie> {
    const newMovie = new this.movieModel(movie);
    return newMovie.save();
  }

  async findOneAndUpdate(
    movieFilterQuery: FilterQuery<Movie>,
    movie: Partial<Movie>
  ): Promise<Movie> {
    return this.movieModel.findOneAndUpdate(movieFilterQuery, movie);
  }
}
