import { AppService } from './app.service';
import { TimerInterceptor } from './timer.interceptor';
import {
  Controller,
  Get,
  Render,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { Session } from './auth/session.decorator';
import EmailPassword from 'supertokens-node/recipe/emailpassword';

@Controller()
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  // @UseInterceptors(TimerInterceptor)
  @UseGuards(AuthGuard)
  async root(@Session() session: SessionContainer) {
    try {
      const userId = session.getUserId();
      const userInfo = await EmailPassword.getUserById(userId, session);
      const email = userInfo.email;
      return {
        email: email,
        authorized: true,
      };
    } catch (error) {
      return { authorized: false };
    }
  }

  @Get('blog')
  @Render('blog')
  // @UseInterceptors(TimerInterceptor)
  @UseGuards(AuthGuard)
  async blog(@Session() session: SessionContainer) {
    try {
      const userId = session.getUserId();
      const userInfo = await EmailPassword.getUserById(userId, session);
      const email = userInfo.email;
      return {
        email: email,
        authorized: true,
      };
    } catch (error) {
      return { authorized: false };
    }
  }

  @Get('slider')
  @Render('slider')
  // @UseInterceptors(TimerInterceptor)
  @UseGuards(AuthGuard)
  async slider(@Session() session: SessionContainer) {
    try {
      const userId = session.getUserId();
      const userInfo = await EmailPassword.getUserById(userId, session);
      const email = userInfo.email;
      return {
        email: email,
        authorized: true,
      };
    } catch (error) {
      return { authorized: false };
    }
  }

  @Get('todo_list')
  @Render('todo_list')
  // @UseInterceptors(TimerInterceptor)
  @UseGuards(AuthGuard)
  async todoList(@Session() session: SessionContainer) {
    try {
      const userId = session.getUserId();
      const userInfo = await EmailPassword.getUserById(userId, session);
      const email = userInfo.email;
      return {
        email: email,
        authorized: true,
      };
    } catch (error) {
      return { authorized: false };
    }
  }

  @Get('/sessioninfo')
  @UseGuards(AuthGuard)
  async getSessionInformation(@Session() session: SessionContainer) {
    try {
      const userId = session.getUserId();
      const userInfo = await EmailPassword.getUserById(userId, session);
      const email = userInfo.email;
      return {
        email: email,
        authorized: true,
      };
    } catch (error) {
      return { authorized: false };
    }
  }
}
