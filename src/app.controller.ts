import { AppService } from './app.service';
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
  Req,
} from '@nestjs/common';
import firebase from 'firebase/compat/app';

@Controller()
export class AppController {
  authorized = false;
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  @UseInterceptors(TimerInterceptor)
  root() {
    return { authorized: this.authorized, email: this.email };
  }

  @Get('blog')
  @Render('blog')
  @UseInterceptors(TimerInterceptor)
  blog() {
    return { authorized: this.authorized, email: this.email };
  }

  @Get('slider')
  @Render('slider')
  @UseInterceptors(TimerInterceptor)
  slider() {
    return { authorized: this.authorized, email: this.email };
  }

  @Get('todo_list')
  @Render('todo_list')
  @UseInterceptors(TimerInterceptor)
  todoList() {
    return { authorized: this.authorized, email: this.email };
  }

  @Post('auth/login')
  async login(@Req() req, @Res() res) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(req.body.email, req.body.password);
      this.authorized = true;
      this.email = req.body.email;
      return res.redirect('back');
    } catch (e) {
      console.log('Unable to authorize.');
      this.authorized = true;
      this.email = 'email';
      return res.redirect('back');
    }
  }

  @Post('auth/register')
  async register(@Req() req, @Res() res) {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(req.body.email, req.body.password);
      this.authorized = true;
      this.email = req.body.email;
      return res.redirect('back');
    } catch (e) {
      console.log('Unable to register.');
      return res.redirect('back');
    }
  }

  @Post('logout')
  async logout(@Req() req, @Res() res) {
    this.authorized = false;
    return res.redirect('back');
  }
}
