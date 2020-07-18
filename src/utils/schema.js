import { schema } from "normalizr";

const product = new schema.Entity("products");

const arrayOfProducts = new schema.Array(product);

export { product, arrayOfProducts };
