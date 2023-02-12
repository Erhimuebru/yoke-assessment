import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import * as qrcode from "qrcode";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./schemas/movie.schema";
import { MovieService } from "./movie.service";

@Controller("movie")
export class MovieController {
  movies: any;
  constructor(private readonly MovieService: MovieService) {}

  @Get(":id")
  async getMovie(@Param("id") id: string): Promise<Movie> {
    return this.MovieService.getMovieById(id);
  }

  @Get()
  async getMovies(): Promise<Movie[]> {
    return this.MovieService.getMovies();
  }

  @Post()
  async createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.MovieService.createMovie(
      createMovieDto.title,
      createMovieDto.image
    );
  }

  @Patch(":id")
  async updateMovie(
    @Param("id") id: string,
    @Body() updateMovieDto: UpdateMovieDto
  ): Promise<Movie> {
    return this.MovieService.updateMovie(id, updateMovieDto);
  }
}

function Res() {
  throw new Error("Function not implemented.");
}
