import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentsById(@Param('studentId') studentId: string) {
    return `Get Student By Id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() Body) {
    return `Create student With The Following Data ${JSON.stringify(Body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update Student With Id of ${studentId} With Data of ${JSON.stringify(
      body,
    )}`;
  }
}
