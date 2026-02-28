import { Department } from './department.model';

export interface Student {
    id: number;
    name: string;
    age: number;
    departmentId: number;
    department?: Department;
}
