import { Module } from '@nestjs/common';
import { NotebookController } from './notebook.controller';
import { NotebookGateway } from './notebook.gateway';

@Module({
  controllers: [NotebookController],
  providers: [NotebookGateway],
})
export class NotebookModule {}
