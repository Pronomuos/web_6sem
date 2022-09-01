import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth-guard';
import { LocalAuthGuard } from './auth/local-auth-guard';
import { AuthService } from './auth/auth.service';
import { TimerInterceptor } from './timer.interceptor';
import {
  Controller,
  Get,
  Render,
  Request,
  Post,
  UseGuards,
  UseInterceptors,
  Res,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  @UseInterceptors(TimerInterceptor)
  root() {
    return { signed_in: true };
  }

  @Get('blog')
  @Render('blog')
  @UseInterceptors(TimerInterceptor)
  blog() {
    return { signed_in: true };
  }

  @Get('slider')
  @Render('slider')
  @UseInterceptors(TimerInterceptor)
  slider() {
    return;
  }

  @Get('todo_list')
  @Render('todo_list')
  @UseInterceptors(TimerInterceptor)
  todoList() {
    return;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Res() res) {
    return res.redirect('/');
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('logout')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async logout(@Request() req) {
    return {
      signed_in: true,
    };
  }
}
