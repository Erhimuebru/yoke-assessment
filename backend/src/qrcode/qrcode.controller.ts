import { Controller, Get, Redirect } from '@nestjs/common';
import { Response } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Controller('qrcode')
export class QrcodeController {
  private movie: string[];

  constructor() {
    this.updateMovie();
    setInterval(() => {
      this.updateMovie();
    }, 10000);
  }

  async generateQRCode(text: string): Promise<Buffer> {
    return await qrcode.toBuffer(text);
  }

  getMovie(): string[] {
    const movieList = [
      'mongodb+srv://erhimuebru:dftS6ew21jiATWHi@cluster0.lye52ec.mongodb.net/movies',
    ]; // Put here the list of all available movies
    const randomMovies = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * movieList.length);
      randomMovies.push(movieList[randomIndex]);
      movieList.splice(randomIndex, 1);
    }
    return randomMovies;
  }

  updateMovie() {
    this.movie = this.getMovie();
  }

  @Get('/')
  async generateQRCod(@Response() res): Promise<void> {
    const text = 'http://localhost/5000/movie/';
    const qrCode = await this.generateQRCode(text);
    res.contentType('image/png');
    res.send(qrCode);
    // res.redirect('http://localhost/5000/movie/');
    // res.render('/movies', { movies: this.movie });
  }

  @Get('/movies/:timestamp')
  getMoviePage(@Response() res): void {
    res.render('movies', { movies: this.movie });
  }
}
