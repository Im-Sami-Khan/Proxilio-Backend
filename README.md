# Proxilio Backend

Proxilio Backend is a simple CRUD application for managing projects and clients, utilizing MongoDB, Express, and GraphQL to facilitate efficient data operations.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Configure your environment variables.
5. Run `npm start` to start the server.

## Technologies Used

- MongoDB
- Express
- GraphQL

## Models

1. Clients
2. Projects

## GraphQL Mutations

### Clients

- `createClient`: Create a new client.
- `updateClient`: Update an existing client.
- `deleteClient`: Delete a client.

### Projects

- `createProject`: Create a new project.
- `updateProject`: Update an existing project.
- `deleteProject`: Delete a project.

## GraphQL Root Queries

### Projects

- `projects`: Retrieve all projects.
- `project`: Retrieve a project by its ID.

### Clients

- `clients`: Retrieve all clients.
- `client`: Retrieve a client by their ID.

## Environment Variables

To run the application, you need to set the following environment variables:

- `NODE_ENV`: Set the environment to either development, staging, or production.
- `PORT`: Set the port on which the server will run.
- `MONGO_URI`: Set the URI for your MongoDB database.

## Contributing

Contributions are always welcome! If you have any ideas or suggestions to improve this project, please feel free to open an issue or submit a pull request.
