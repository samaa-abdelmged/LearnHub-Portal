import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student';
import { DepartmentService } from '../../services/department';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student.model';
import { Department } from '../../models/department.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-student-edit',
  templateUrl: './student-edit.html',
  styleUrls: ['./student-edit.css']
})
export class StudentEditComponent implements OnInit {

  student: Student = { id: 0, name: '', age: 0, departmentId: 0, department: undefined };
  departments: Department[] = [];

  constructor(
    private studentService: StudentService,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.studentService.getStudent(id).subscribe(s => this.student = s);
    this.departmentService.getDepartments().subscribe(d => this.departments = d);
  }

  updateStudent() {
    this.studentService.updateStudent(this.student.id, this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
