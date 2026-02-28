import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'https://localhost:44395/api/department';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl).pipe(
      map(depts => depts.map(d => ({
        ...d,
        students: Array.isArray(d.students)
          ? d.students.map(s => ({ id: s.id, name: s.name, age: s.age, departmentId: s.departmentId }))
          : []
      })))
    );
  }

  getDepartment(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`).pipe(
      map(d => ({
        ...d,
        students: Array.isArray(d.students)
          ? d.students.map(s => ({ id: s.id, name: s.name, age: s.age, departmentId: s.departmentId }))
          : []
      }))
    );
  }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(id: number, department: Department): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, department);
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
