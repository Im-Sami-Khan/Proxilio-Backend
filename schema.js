import { GraphQLSchema } from "graphql";

import RootQuery from './queries/RootQuery.js'
import mutation from './mutations/mutations.js'

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
