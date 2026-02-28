import { Component } from '@angular/core';
import { StudentService } from '../../services/student';
import { DepartmentService } from '../../services/department';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { Department } from '../../models/department.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-student-add',
  templateUrl: './student-add.html',
  styleUrls: ['./student-add.css']
})
export class StudentAddComponent {

  student: Student = { id: 0, name: '', age: 0, departmentId: 0, department: undefined };
  departments: Department[] = [];

  constructor(
    private studentService: StudentService,
    private departmentService: DepartmentService,
    private router: Router
  ) {
    this.departmentService.getDepartments().subscribe(d => this.departments = d);
  }

  addStudent() {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
