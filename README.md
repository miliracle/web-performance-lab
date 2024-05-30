# Web Performance Experimentation Lab

This project is a Web Performance Experimentation Lab that uses Next.js for the frontend, Node.js and Express for the backend API, and MongoDB with Mongo Atlas for the database. It is organized as a monorepo managed by Lerna and npm workspaces, with TypeScript configured for the API package.


## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account and cluster set up

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/web-performance-lab.git
    cd web-performance-lab
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Setting Up Environment Variables

1. Create a `.env` file in the `packages/api` directory with the following content:

    ```plaintext
    MONGODB_URI=your_mongo_atlas_connection_string
    ```

### Running the Applications

1. Start the Next.js application:

    ```bash
    npm run dev --workspace=next-app
    ```

2. Start the Node.js API:

    ```bash
    npm run dev --workspace=api
    ```

### Building the Applications

1. Build the Next.js application:

    ```bash
    npm run build --workspace=next-app
    ```

2. Compile the Node.js API TypeScript files:

    ```bash
    npm run build --workspace=api
    ```

## Project Details

### Next.js Application

The Next.js application is located in the `packages/next-app` directory. It includes the default Next.js structure with pages, public assets, and styles.

### Node.js API

The Node.js API is located in the `packages/api` directory. It uses Express for handling HTTP requests and MongoDB for database operations. The API is written in TypeScript.

### Lerna and npm Workspaces

This project uses Lerna to manage the monorepo and npm workspaces to handle dependencies and linking between packages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
