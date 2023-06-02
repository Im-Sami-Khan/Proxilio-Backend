import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";

import ProjectType from "./ProjectType.js";
import Project from "../models/Project.js";

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, _args) {
        return Project.find({
          clientId: parent.id
        });
      },
    },
  }),
});

export default ClientType;
