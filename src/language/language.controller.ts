import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiResponse
} from '@nestjs/swagger';
import { LanguageService } from './language.service';
import { LanguageDto } from './dto/language.dto';
import { Language } from '@prisma/client';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @ApiOperation({
    summary: 'Get all Languages.',
  })
  @ApiOkResponse({
    description: 'Languages are extracted.',
  })
  @Get('all')
  public async getAllLanguages(): Promise<Language[]> {
    return this.languageService.Languages({});
  }

  @ApiOperation({
    summary: 'Add a new language.',
  })
  @ApiOkResponse({
    description: 'Language has been added.',
  })
  @Post('create')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async addLanguage(@Body() LanguageData: LanguageDto): Promise<Language> {
    const LanguageToAdd = {
      name: LanguageData.name,
      proficiency: LanguageData.proficiency,
    };
    return await this.languageService.createLanguage(LanguageToAdd);
  }

  @ApiOperation({
    summary: 'Delete language by ID.',
  })
  @ApiOkResponse({
    description: 'Language has been deleted.',
  })
  @ApiBadRequestResponse({
    description: 'Language is not found.',
  })
  @Delete(':id/delete')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async deleteLanguageById(@Param('id') id: number): Promise<Language> {
    const LanguageToDelete = await this.languageService.Language({ id: Number(id) });
    if (LanguageToDelete == null) {
      throw new HttpException('Language not found', HttpStatus.BAD_REQUEST);
    }
    return this.languageService.deleteLanguage({ id: Number(id) });
  }
}