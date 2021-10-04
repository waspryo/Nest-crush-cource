import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentsResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentsResponseDto {
    return this.students.find((v) => {
      return v.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updateStudent: StudentResponseDto;

    const updateStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updateStudent = {
          id: studentId,
          ...payload,
        };
        return updateStudent;
      } else return student;
    });

    this.students = updateStudentList;
    return updateStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher == teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updateStudent: StudentResponseDto;

    const updateStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updateStudent = {
          ...student,
          teacher: teacherId,
        };
        return updateStudent;
      } else return student;
    });

    this.students = updateStudentList;
    return updateStudent;
  }
}
