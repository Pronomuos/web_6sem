import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SkillDto {
  @ApiProperty({
    description: 'Skill name.',
    example: 'Tools.',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Description of the skill',
    example: 'Docker, Git, DVC, MlFlow, PostgreSQL, MySQL, SQLite.',
  })
  readonly description: string;
}