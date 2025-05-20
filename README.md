# Forum API

A RESTful API for a forum application built with NestJS, PostgreSQL, and Prisma ORM.

## Features

- User authentication and authorization
- Question management (create, read, update, delete)
- Answer management (create, read, update, delete)
- PostgreSQL database with Prisma ORM
- Docker support for easy development and deployment

## Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)
- Docker and Docker Compose (for containerized development)

## Getting Started

### Environment Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd forum-api
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://forum_user:forum_password@localhost:5432/forum_db?schema=public"
JWT_SECRET="your-secret-key"
```

### Running with Docker

1. Start the PostgreSQL database:
```bash
docker compose up -d
```

2. Generate Prisma client:
```bash
pnpm prisma generate
```

3. Run database migrations:
```bash
pnpm prisma migrate dev
```

4. Start the development server:
```bash
pnpm start:dev
```

The API will be available at `http://localhost:3000`

### Running without Docker

1. Make sure you have PostgreSQL installed and running
2. Create a database named `forum_db`
3. Create a user `forum_user` with password `forum_password`
4. Follow steps 2-4 from the Docker section

## Available Scripts

- `pnpm start:dev` - Start development server with hot-reload
- `pnpm build` - Build the application
- `pnpm start:prod` - Start production server
- `pnpm test` - Run tests
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm lint` - Run linter
- `pnpm format` - Format code with Prettier

## API Documentation

The API documentation is available in the `forum.http` file, which can be used with VS Code's REST Client extension or similar tools.

### Main Endpoints

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /questions` - List all questions
- `POST /questions` - Create a new question
- `GET /questions/:id` - Get a specific question
- `PUT /questions/:id` - Update a question
- `DELETE /questions/:id` - Delete a question
- `POST /questions/:id/answers` - Add an answer to a question
- `GET /questions/:id/answers` - Get all answers for a question

## Database Schema

The application uses the following main models:

- User: Stores user information
- Question: Stores forum questions
- Answer: Stores answers to questions

## Development

### Prisma Commands

- `pnpm prisma generate` - Generate Prisma Client
- `pnpm prisma migrate dev` - Create and apply migrations
- `pnpm prisma studio` - Open Prisma Studio to view/edit database

### Code Style

The project uses ESLint and Prettier for code formatting. Run `pnpm format` to format your code before committing.

## License

This project is private and unlicensed.
