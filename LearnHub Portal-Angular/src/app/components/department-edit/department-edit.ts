import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../../models/department.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  selector: 'app-department-edit',
  templateUrl: './department-edit.html',
  styleUrls: ['./department-edit.css']
})
export class DepartmentEditComponent implements OnInit {

  department: Department = { id: 0, name: '', students: [] };

  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.departmentService.getDepartment(id).subscribe(d => this.department = d);
  }

  updateDepartment() {
    this.departmentService.updateDepartment(this.department.id, this.department).subscribe(() => {
      this.router.navigate(['/departments']);
    });
  }
}
