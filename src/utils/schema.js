import { schema } from "normalizr";

const company = new schema.Entity("companies");

const product = new schema.Entity("products", {
  company: company,
});

const arrayOfProducts = new schema.Array(product);

export { product, arrayOfProducts };
