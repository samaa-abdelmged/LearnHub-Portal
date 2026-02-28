import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department';
import { Department } from '../../models/department.model';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-department-list',
  templateUrl: './department-list.html',
  styleUrls: ['./department-list.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[] = [];

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(data => this.departments = data);
  }

  editDepartment(id: number) {
    this.router.navigate(['/departments/edit', id]);
  }

  deleteDepartment(id: number) {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => this.loadDepartments());
    }
  }
}
