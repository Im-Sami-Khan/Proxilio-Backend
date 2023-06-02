import { GraphQLObjectType, GraphQLList, GraphQLID } from "graphql";

import ProjectType from "../types/ProjectType.js";
import ClientType from "../types/ClientType.js";
import Project from "../models/Project.js";
import Client from "../models/Client.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(_parent, _args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(_parent, _args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

export default RootQuery;
