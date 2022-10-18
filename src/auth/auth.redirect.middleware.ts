import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getSession } from 'supertokens-node/lib/build/recipe/session';

@Injectable()
export class AuthRedirectMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    getSession(req, res).catch((err) => {
      if (err.type === 'UNAUTHORISED') {
        res.redirect('/login');
      } else {
        next();
      }
    });
    next();
  }
}
