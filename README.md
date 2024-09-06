# irctc_backend_services
Here’s the `README.md` file for your project that details how to set up and run the railway management system locally, including database setup with MySQL and `.env` configuration.

---

# irctc_backend_services

This project is a railway management system similar to IRCTC, built using **Node.js**, **Express.js**, **Sequelize ORM**, and **MySQL**. It provides endpoints for users to check train availability, book seats, and admins to manage trains.

## Features
- **User Registration/Login** with JWT-based authentication.
- **Admin Operations**: Add trains, manage train details (protected by API key).
- **Check Train Availability** between two stations.
- **Book Seats** with race condition handling.
- **Fetch Booking Details**.

## Tech Stack
- **Node.js** + **Express.js**: Backend framework.
- **Sequelize ORM**: For managing database models and queries.
- **MySQL**: Database used for storing users, trains, and bookings.
- **JWT**: JSON Web Token for user authentication.
- **bcrypt**: For password hashing.

---

## Prerequisites
1. **Node.js** (v14 or later) and **npm** installed on your system.
2. **MySQL** installed locally or use a cloud-based MySQL service (e.g., AWS RDS, ClearDB).
3. **Git** for version control.

---

## Setup Guide

### 1. Clone the Repository
```bash
git clone https://github.com/hjkhalid/irctc_backend_services
cd irctc_backend_services
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure MySQL Database
- Create a MySQL database, e.g., `railway_db`.
- Create a user with the required permissions to access and modify the database.

### 4. Create `.env` File

In the root directory of your project, create a `.env` file to store environment variables for database connection and API configurations:

```bash
touch .env
```

Add the following content to the `.env` file:

```bash
# Server configuration
PORT=3000

# MySQL Database Configuration
DB_NAME=railway_db
DB_USER=root           # Replace with your MySQL username
DB_PASSWORD=secret     # Replace with your MySQL password
DB_HOST=localhost
DB_PORT=3306

# JWT Secret Key
ACCESS_TOKEN_SECRET=your_jwt_secret_key_here

# Admin API Key
ADMIN_API_KEY=your_admin_api_key_here
```

### 5. Setup the Database with Sequelize

To create and sync the MySQL database tables, run the following command:

```bash
npx sequelize-cli db:migrate
```

This command will create the necessary tables for `User`, `Train`, and `Booking` models.

---

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. The API will now be running at `http://localhost:3000`.

---

## API Endpoints

### Public Endpoints (User)

| Method | Endpoint               | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/user/register`        | Register a new user            |
| POST   | `/user/login`           | Log in and get a JWT token      |

### Admin Endpoints (Protected by API Key)

| Method | Endpoint               | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/train/admin/train`    | Add a new train (Admin only)    |

> **Note**: To access admin routes, include the API key in the `x-api-key` header.

### Authenticated Endpoints (Require JWT Token)

| Method | Endpoint               | Description                    |
|--------|------------------------|--------------------------------|
| GET    | `/train/availability`   | Check train availability        |
| POST   | `/train/book`           | Book a seat                    |
| GET    | `/booking/details`      | Get booking details            |

---

## Testing the Application

- Use a tool like **Postman** or **Insomnia** to test the API endpoints.
- Include the JWT token in the `Authorization` header for protected routes:
  ```bash
  Authorization: Bearer <your_token_here>
  ```

- Admin routes should include the API key in the `x-api-key` header:
  ```bash
  x-api-key: your_admin_api_key_here
  ```

---

## Troubleshooting

### Database Connection Errors
- Ensure that MySQL is running and accessible.
- Verify the credentials and database name in the `.env` file.
- Check if the port `3306` is open (default for MySQL).

---

## License
This project is licensed under the MIT License.

---

### Author
Your Name - [GitHub Profile](https://github.com/your-username)

---

With this `README.md` file, any developer can easily set up and run your project locally. Let me know if you need any further adjustments!

### Suggested Next Steps:
**a.** Add additional security to your `.env` file in production using tools like `dotenv-safe`.  
**b.** Write a migration file for setting up the initial database tables automatically.