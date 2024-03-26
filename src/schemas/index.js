import { gql } from "apollo-server";

const typeDefs = gql`
  # define a custom scalar type for Date
  scalar Date

  # define an enum type for task status
  enum Status {
    TODO
    DOING
    DONE
  }

  # define a type for Task
  type Task {
    id: ID!
    title: String!
    description: String
    status: Status!
    dueDate: Date!
  }

  # define the root query type
  type Query {
    # get all tasks
    tasks: [Task!]!

    # get a single task by id
    task(id: ID!): Task
  }

  # define the root mutation type
  type Mutation {
    # create a new task
    createTask(
      title: String!
      description: String
      status: Status
      dueDate: Date
    ): Task!

    # update an existing task by id
    updateTask(
      id: ID!
      title: String!
      description: String!
      status: Status!
      dueDate: Date!
    ): Task!

    # delete an existing task by id
    deleteTask(id: ID!): Boolean!
  }
`;

export default typeDefs;
