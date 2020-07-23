import { schema } from "normalizr";

const product = new schema.Entity("products");

const arrayOfProducts = new schema.Array(product);

const comment = new schema.Entity("commnets");
const arrayOfComments = new schema.Array(comment);

export { product, arrayOfProducts, arrayOfComments };
