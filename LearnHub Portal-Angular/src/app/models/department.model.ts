import { Student } from './student.model';

export interface Department {
    id: number;
    name: string;
    students?: Student[];
}
