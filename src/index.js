import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";

// Import schema and resolvers
import typeDefs from "./schemas/index.js";
import resolvers from "./resolvers/index.js";

// Create a global Prisma Client
const prisma = new PrismaClient();
export { prisma };

// specify port
const PORT = process.env.PORT || 4000;

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Connect to Prisma
async function startServer() {
  try {
    await prisma.$connect();
    console.log("Connected to SQLite database");
    await server.listen(PORT);
    console.log(`Server ready at ${server.graphqlPath}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

startServer();
