import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Session } from '../auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  @ApiOperation({
    summary: 'Chat',
    description: 'Place where you can leave some messages.',
  })
  @Get()
  @Render('chat')
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
}
