import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import ClientType from "./ClientType.js";
import Client from "../models/Client.js";

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, _args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

export default ProjectType;
