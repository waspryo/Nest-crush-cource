import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherByID(@Param('teacherId') teacherId: string) {
    return `Get Teacher With Id of ${teacherId}`;
  }
}
