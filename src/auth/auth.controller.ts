import { Controller, Get, Render } from '@nestjs/common';
import { appInfo } from '../config';

@Controller('/login')
export class AuthController {
  @Get()
  @Render('login')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  root() {}
}
