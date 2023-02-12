// import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable()
// export class CorsMiddleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     next();
//   }
// }

import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, Authorization"
    );
    next();
  }
}
