import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./category";
import restaurant from "./restaurant";
import dish from "./dish";
import featured from "./featured";
import user from "./user"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  types: schemaTypes.concat([restaurant, dish, category, featured, user]),
});
