// app.routes.ts
import { Routes } from '@angular/router';

import { StudentListComponent } from './components/student-list/student-list';
import { StudentAddComponent } from './components/student-add/student-add';
import { StudentEditComponent } from './components/student-edit/student-edit';
import { DepartmentListComponent } from './components/department-list/department-list';
import { DepartmentAddComponent } from './components/department-add/department-add';
import { DepartmentEditComponent } from './components/department-edit/department-edit';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

import { AuthGuard } from './guards/auth-guard';


export const routes: Routes = [
    // Home (protected)
    { path: '', component: StudentListComponent, canActivate: [AuthGuard] },

    // Students
    { path: 'students/add', component: StudentAddComponent, canActivate: [AuthGuard] },
    { path: 'students/edit/:id', component: StudentEditComponent, canActivate: [AuthGuard] },

    // Departments
    { path: 'departments', component: DepartmentListComponent, canActivate: [AuthGuard] },
    { path: 'departments/add', component: DepartmentAddComponent, canActivate: [AuthGuard] },
    { path: 'departments/edit/:id', component: DepartmentEditComponent, canActivate: [AuthGuard] },

    // Auth
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // Not found
    { path: '**', redirectTo: '' }
];

