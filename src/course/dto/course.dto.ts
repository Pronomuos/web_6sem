import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CourseDto {
  @ApiProperty({
    description: 'Course name.',
    example: 'Machine learning and data analysis.',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Description of the course.',
    example: 'Classical course about ml algorithms.',
  })
  readonly description: string;

  @ApiProperty({
    description: 'Date the course was started.',
    example: '2021',
  })
  @IsNotEmpty()
  readonly started_at: Date;

  @ApiProperty({
    description: 'Date the course was ended.',
    example: '2021',
  })
  @IsNotEmpty()
  readonly ended_at: Date;
}