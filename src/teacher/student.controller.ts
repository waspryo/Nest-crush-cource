import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get('')
  getStudents(@Param('teacherId') teacherId: string) {
    return `Get All Students That Belong to A Teacher With An Id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update Student With Id of ${studentId} To Teacher With Id of ${teacherId}`;
  }
}
