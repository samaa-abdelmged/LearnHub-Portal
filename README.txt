# Student & Department Management System – Full Stack

A **Full Stack Web Application** built using **Angular (TypeScript)** for the frontend and **ASP.NET Core** for the backend.
The system allows users to **register, login, and manage students and departments**, demonstrating **JWT authentication, RESTful API, and modern web development practices**.

---

## Technologies Used

### Frontend

* **Framework:** Angular
* **Language:** TypeScript
* **Styling:** CSS3, Bootstrap / Angular Material
* **Tools:** Angular CLI, RxJS, HttpClient

### Backend

* **Framework:** ASP.NET Core Web API
* **ORM:** Entity Framework Core
* **Database:** SQL Server
* **Authentication:** JWT, BCrypt Password Hashing

### Development & Testing Tools

* **API Testing:** Swagger, Postman
* **Version Control:** Git, GitHub
* **Other:** Visual Studio / VS Code

---

## Key Features

* Full User Authentication (Register & Login) with JWT
* Role-based authorization (Admin/User)
* CRUD operations for Students and Departments
* Display all students with their associated departments
* Display all departments with their students
* Frontend built with Angular and TypeScript for dynamic UI
* Backend API structured using Clean Architecture principles
* Database relationships handled via Entity Framework Core

---

## Project Structure

```
Student-Department-FullStack
│
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   ├── services
│   │   │   └── models
│   │   └── index.html, styles.css, main.ts
│   └── angular.json
│
├── backend
│   ├── WebApplication2
│   │   ├── Controllers
│   │   │   ├── AuthController.cs
│   │   │   ├── StudentController.cs
│   │   │   └── DepartmentController.cs
│   │   ├── Models
│   │   ├── Data
│   │   └── DTOs
│   └── WebApplication2.sln
```

---

## Database Design

### User

* Id, Username, PasswordHash, Role
* Can register, login, and access protected routes

### Student

* Id, Name, Age, DepartmentId
* Linked to Department
* Department info included when fetching students

### Department

* Id, Name
* Contains multiple students

---

## API Endpoints (Backend)

### Authentication

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |

### Students

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | /api/student      | Get all students    |
| GET    | /api/student/{id} | Get a student by Id |
| POST   | /api/student      | Create new student  |
| PUT    | /api/student/{id} | Update student      |
| DELETE | /api/student/{id} | Delete student      |

### Departments

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| GET    | /api/department      | Get all departments    |
| GET    | /api/department/{id} | Get a department by Id |
| POST   | /api/department      | Create new department  |
| PUT    | /api/department/{id} | Update department      |
| DELETE | /api/department/{id} | Delete department      |

---

## How to Run the Project

### Backend

1️⃣ Navigate to backend folder:

```bash
cd backend/WebApplication2
```

2️⃣ Restore dependencies:

```bash
dotnet restore
```

3️⃣ Apply database migrations:

```bash
dotnet ef database update
```

4️⃣ Run the backend API:

```bash
dotnet run
```

5️⃣ Swagger UI available at:

```text
https://localhost:xxxx/swagger
```

### Frontend

1️⃣ Navigate to frontend folder:

```bash
cd frontend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Run Angular app:

```bash
ng serve
```

4️⃣ Open in browser:

```text
http://localhost:4200
```

---

## Future Improvements

* Role-Based UI: Show/hide features based on user role
* Pagination & Filtering on tables for performance
* Frontend form validation using Angular Reactive Forms
* Unit testing using Jasmine/Karma (frontend) and xUnit (backend)
* Real-Time Updates using SignalR
* Logging & Monitoring using Serilog

---

## 👩‍💻 Developer Info

| Field        | Details                                                                    |
| ------------ | -------------------------------------------------------------------------- |
| **Name**     | Samaa Abdelmged Roshdy                                                     |
| **Role**     | Full Stack .NET / Angular Developer                                        |
| **Location** | Cairo, Egypt                                                               |
| **Phone**    | +20 101 450 4030                                                           |
| **Email**    | [samaaabdelmged@gmail.com](mailto:samaaabdelmged@gmail.com)                |
| **LinkedIn** | [linkedin.com/in/samaa-abdelmged](https://linkedin.com/in/samaa-abdelmged) |
| **GitHub**   | [github.com/samaa-abdelmged](https://github.com/samaa-abdelmged)           |

---
