import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";

// Import schema and resolvers
import typeDefs from "./schemas/index.js";
import resolvers from "./resolvers/index.js";

// Create a global Prisma Client
const prisma = new PrismaClient();
export { prisma };

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
    await server.listen(8080);
    console.log(`Server ready at ${server.graphqlPath}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

startServer();
