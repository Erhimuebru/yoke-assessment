import { Controller, Get, Res } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import * as qrcode from "qrcode";
import { Response } from "express";

@Controller()
export class MoviesController {
  movies: any;
  constructor(private readonly MoviesService: MoviesService) {}
  @Get("qr")
  async generateQR(@Res() res: Response) {
    const url = "https://localhost/movies";
    const qr = await qrcode.toDataURL(url);
    res.contentType("image/png");
    res.end(qr, "base64");
  }

  @Get("movies")
  getMovies(): any[] {
    return this.MoviesService.getRandomMovies();
  }
}
