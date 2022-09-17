import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render } from '@nestjs/common';

@ApiTags('Notebook')
@Controller()
export class NotebookController {
  @ApiOperation({
    summary: 'Notebook',
    description: 'Place where you can leave some notes.',
  })
  @Get('notebook')
  @Render('notebook')
  showNotebook() {
    return;
  }
}