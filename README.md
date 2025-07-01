# Employee Management App

A simple Angular application for managing employees, including listing, creating, editing, and deleting employee records. This project demonstrates the use of Angular services, components, routing, and HTTP client to interact with a backend API.

## Features

- View a list of employees
- Add a new employee
- Edit existing employee details
- Delete employees
- Mock data fallback if API is unavailable
- Modular Angular structure with services and components

## Employee Data Model

The application manages employees with the following structure:

```typescript
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
}
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-management-app.git
   cd employee-management-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

The API endpoint is configured in `src/environments/environment.ts`:

```typescript
export const environment = {
  isProd: false,
  apiUrl: "https://localhost:7025/api",
};
```

Update `apiUrl` to match your backend API if needed.

### Running the App

Start the development server:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser.

### Building for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

- **Unit tests:**
  ```bash
  ng test
  ```
- **End-to-end tests:**
  ```bash
  ng e2e
  ```

## Project Structure

- `src/app/employee-table/` — Displays the list of employees and allows deletion/editing.
- `src/app/employee-form/` — Form for creating and editing employees.
- `src/app/employee.ts` — Angular service for API communication.
- `src/Models/employee.ts` — Employee data model.

## API Endpoints Used

- `GET /employee` — List all employees
- `GET /employee/{id}` — Get employee by ID
- `POST /employee` — Create new employee
- `PUT /employee/{id}` — Update employee
- `DELETE /employee/{id}` — Delete employee

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) (or specify your license)
