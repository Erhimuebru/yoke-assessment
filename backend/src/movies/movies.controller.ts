import { Controller, Get } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Controller('movies')
export class MoviesController {
  @Get()
  async getMovies(): Promise<any[]> {
    // Make a GET request to the API to get the list of movies
    const response = await fetch('http://localhost/5000/movie');
    const movies = await response.json();
    return movies;
  }

  @Get('qrcode')
  async getQRCode(): Promise<string> {
    const movieList = await this.getMovies();
    const randomMovies = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * movieList.length);
      randomMovies.push(movieList[randomIndex]);
      movieList.splice(randomIndex, 1);
    }

    const text = 'http://localhost/5000/movie' + Date.now();
    const qrCode = await qrcode.toDataURL(text);

    return qrCode;
  }
}
