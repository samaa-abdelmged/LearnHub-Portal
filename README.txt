Student & Department Management System – Full Stack (.NET & Angular)

A Full Stack Web Application built using ASP.NET Core Web API for the backend and Angular (TypeScript) for the frontend.
The system allows users to register, login, and manage students and departments while demonstrating JWT Authentication, RESTful APIs, and modern web development practices.

Technologies Used:

Frontend:
Framework: Angular
Language: TypeScript
Styling: CSS3, Bootstrap
Tools: Angular CLI, RxJS, HttpClient

Backend:
Framework: ASP.NET Core Web API
ORM: Entity Framework Core
Database: SQL Server
Authentication: JWT Authentication
Security: BCrypt Password Hashing

Development Tools:
Swagger
Postman
Git & GitHub
Visual Studio / VS Code

Key Features:
User Registration & Login with JWT Authentication
Role-Based Authorization (Admin / User)
Full CRUD operations for Students
Full CRUD operations for Departments
View students with their departments
View departments with their students
Angular frontend consuming RESTful APIs
Entity Framework Core handling database relationships

Project Structure:
Student-Department-FullStack
frontend (Angular)
src/app
components
services
models

backend (.NET):
Controllers
AuthController.cs
StudentController.cs
DepartmentController.cs

Models:
User.cs
Student.cs
Department.cs

Data:
AppDbContext.cs

DTOs:

Database Design:
User:
Id
Username
PasswordHash
Role

Student:
Id
Name
Age
DepartmentId

Department:
Id
Name
Contains multiple Students

API Endpoints:

Authentication:
POST /api/auth/register
Register new user

POST /api/auth/login
Login user

Students:
GET /api/student
Get all students

GET /api/student/{id}
Get student by id

POST /api/student
Create student

PUT /api/student/{id}
Update student

DELETE /api/student/{id}
Delete student

Departments:
GET /api/department
Get all departments

GET /api/department/{id}
Get department by id

POST /api/department
Create department

PUT /api/department/{id}
Update department

DELETE /api/department/{id}
Delete department

Future Improvements:
Role-based UI in Angular
Pagination & filtering for tables
Form validation using Angular Reactive Forms
Unit Testing (xUnit & Jasmine)
Real-time notifications using SignalR
Logging with Serilog

Developer:
Samaa Abdelmged Roshdy
Full Stack .NET / Angular Developer

Email
[samaaabdelmged@gmail.com]

Phone
+20 101 450 4030

LinkedIn
[https://linkedin.com/in/samaa-abdelmged]

GitHub
[https://github.com/samaa-abdelmged]


