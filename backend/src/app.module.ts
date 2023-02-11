import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MovieModule } from "./movie/movie.module";
import { MongooseModule } from "@nestjs/mongoose";
import { QrcodeModule } from "./qrcode/qrcode.module";
import { MoviesModule } from "./movies/movies.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://erhimuebru:dftS6ew21jiATWHi@cluster0.lye52ec.mongodb.net/movies"
    ),
    MovieModule,
    QrcodeModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
