import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [TeacherModule, StudentsModule],
})
export class AppModule {}
