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
import { CourseService } from './course.service';
import { CourseDto } from './dto/course.dto';
import { Course } from '@prisma/client';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @ApiOperation({
    summary: 'Get all courses.',
  })
  @ApiOkResponse({
    description: 'Courses are extracted.',
  })
  @Get('all')
  public async getAllCourses(): Promise<Course[]> {
    return this.courseService.courses({});
  }

  @ApiOperation({
    summary: 'Add a new course.',
  })
  @ApiOkResponse({
    description: 'Course has been added.',
  })
  @Post('create')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async addCourse(@Body() courseData: CourseDto): Promise<Course> {
    const courseToAdd = {
      name: courseData.name,
      description: courseData.description,
      started_at: courseData.started_at,
      ended_at: courseData.ended_at,
    };
    return await this.courseService.createCourse(courseToAdd);
  }

  @ApiOperation({
    summary: 'Delete course by ID.',
  })
  @ApiOkResponse({
    description: 'Course has been deleted.',
  })
  @ApiBadRequestResponse({
    description: 'Course is not found.',
  })
  @Delete(':id/delete')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async deleteCourseById(@Param('id') id: number): Promise<Course> {
    const CourseToDelete = await this.courseService.course({ id: Number(id) });
    if (CourseToDelete == null) {
      throw new HttpException('Course not found', HttpStatus.BAD_REQUEST);
    }
    return this.courseService.deleteCourse({ id: Number(id) });
  }
}