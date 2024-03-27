import { prisma } from "../index.js";

const resolvers = {
  Query: {
    // Fetch all tasks
    tasks: async () => {
      try {
        const tasks = await prisma.task.findMany();
        return tasks;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    // Fetch a task by id
    task: async (parent, args) => {
      try {
        const id = parseInt(args.id);
        const task = await prisma.task.findUnique({
          where: { id },
        });
        return task;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },

  Mutation: {
    // Create a new task
    createTask: async (parent, args) => {
      try {
        const task = await prisma.task.create({ data: args });
        return task;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    // Update an existing task
    updateTask: async (parent, args) => {
      try {
        const id = parseInt(args.id);
        const input = {
          title: args.title,
          description: args.description,
          status: args.status,
          dueDate: args.dueDate,
        };
        const task = await prisma.task.update({
          where: { id },
          data: input,
        });
        return task;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    // Delete an existing task
    deleteTask: async (parent, args) => {
      try {
        const id = parseInt(args.id);
        await prisma.task.delete({
          where: { id },
        });
        return true;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
};

export default resolvers;
