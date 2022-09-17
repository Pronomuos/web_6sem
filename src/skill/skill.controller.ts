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
} from '@nestjs/swagger';
import { SkillService } from './skill.service';
import { SkillDto } from './dto/skill.dto';
import { Skill } from '@prisma/client';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @ApiOperation({
    summary: 'Get all skills.',
  })
  @ApiOkResponse({
    description: 'Skills are extracted.',
  })
  @Get('all')
  public async getAllSkills(): Promise<Skill[]> {
    return this.skillService.skills({});
  }

  @ApiOperation({
    summary: 'Add a new skill.',
  })
  @ApiOkResponse({
    description: 'Skill has been added.',
  })
  @Post('create')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async addSkill(@Body() skillData: SkillDto): Promise<Skill> {
    const skillToAdd = {
      name: skillData.name,
      description: skillData.description,
    };
    return await this.skillService.createSkill(skillToAdd);
  }

  @ApiOperation({
    summary: 'Delete skill by ID.',
  })
  @ApiOkResponse({
    description: 'Skill has been deleted.',
  })
  @ApiBadRequestResponse({
    description: 'Skill is not found.',
  })
  @Delete(':id/delete')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async deleteSkillById(@Param('id') id: number): Promise<Skill> {
    const skillToDelete = await this.skillService.skill({ id: Number(id) });
    if (skillToDelete == null) {
      throw new HttpException('Skill not found', HttpStatus.BAD_REQUEST);
    }
    return this.skillService.deleteSkill({ id: Number(id) });
  }
}