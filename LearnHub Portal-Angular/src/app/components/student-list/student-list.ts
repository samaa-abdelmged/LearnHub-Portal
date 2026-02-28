import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student';
import { Student } from '../../models/student.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-student-list',
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(data => this.students = data);
  }

  editStudent(id: number) {
    this.router.navigate(['/students/edit', id]);
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => this.loadStudents());
    }
  }
}
