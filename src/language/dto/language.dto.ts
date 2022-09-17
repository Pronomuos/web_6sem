import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LanguageDto {
  @ApiProperty({
    description: 'Language name.',
    example: 'English.',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Proficiency of the language.',
    example: 'Proficient C1/C2.',
  })
  @IsNotEmpty()
  readonly proficiency: string;
}