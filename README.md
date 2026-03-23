# Lingobuddy

App for learning english by creating collections of words and sentences/expressions. The user can add words/idioms/expressions and put them in a context by writing sentences with them. The user can then review the collections by using flashcards.

LanguageTool API is used to check the sentences made by the user and alert him if there are any grammar mistakes.

## Technologies Used

- Angular 21
- NestJS
- TypeScript
- PostgreSQL
- Prisma 6
- SCSS
- Docker
- Gemini

## Architecture

The application follows a modular architecture, with a clear separation of concerns between the frontend and backend. The frontend is built using Angular, which provides a responsive and interactive user interface. The backend is developed using NestJS, which offers a robust and scalable server-side framework. The application is structured into modules, services, and controllers, allowing for maintainability and scalability.
We have services for vocabulary management, user authentication, and integration with the Gemini API.

## Known Issues

- P1000 Authentication Error on prisma migrate dev
  Solution : Native PostgreSQL on Windows using port 5432. Change the port to 5433 in the docker-compose.yml and in the .env file.

## Prisma & database

The application uses Prisma as an ORM to interact with a PostgreSQL database. The database schema is defined in the `prisma/schema.prisma` file, which includes models for users, vocabulary entries.
Prisma Migrate is used to manage database migrations, allowing for easy schema changes and version control. The application also includes seed scripts to populate the database with initial data for testing and development purposes.

PostgreSQl is set up using Docker for easy local development.

## Auth

The application uses a simple authentication system based on JWT tokens. The user can register and login to access their vocabulary collections. The authentication state is managed using Angular's built-in services and guards to protect routes that require authentication.

- The backend uses NestJS's Passport module to handle authentication and authorization. Passwords are hashed using bcrypt before being stored in the database.

## Gemini Integration

The application integrates with Google's Gemini API to provide advanced language processing capabilities. This allows for features such as grammar checking, sentence correction, and feedback on user input. The integration is handled through a dedicated service in the backend, which communicates with the Gemini API and processes the responses to provide meaningful feedback to the user.

- The frontend sends user input to the backend, which then interacts with the Gemini API to analyze the sentences and return feedback on grammar and correctness. This enhances the learning experience by providing real-time feedback on the user's language usage.

## API

The backend exposes a RESTful API for managing vocabulary entries, collections, and user authentication. The API endpoints are protected using JWT authentication, ensuring that only authenticated users can access their data. The API follows standard REST conventions, making it easy to integrate with the frontend and any future clients.
Services are organized into modules, and controllers handle incoming requests, delegating business logic to services. The API also includes error handling and validation to ensure data integrity.

## Testing

In building ...

## Security

- Passwords are securely hashed using bcrypt before being stored in the database.
- JWT tokens are used for authentication, and sensitive routes are protected using guards to ensure that only authenticated users can access them.
- CORS is configured to allow requests only from trusted origins, enhancing security against cross-origin attacks.

## Deployment

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Linguobuddy

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
