import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department';
import { Router } from '@angular/router';
import { Department } from '../../models/department.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-department-add',
  templateUrl: './department-add.html',
  styleUrls: ['./department-add.css']
})
export class DepartmentAddComponent {

  department: Department = { id: 0, name: '', students: [] };

  constructor(private departmentService: DepartmentService, private router: Router) { }

  addDepartment() {
    this.departmentService.addDepartment(this.department).subscribe(() => {
      this.router.navigate(['/departments']);
    });
  }
}
