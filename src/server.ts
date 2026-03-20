import Elysia from "elysia";

export const httpServer = new Elysia({
  prefix: "/api",
})
  .get("/", () => "Hello Elysia!");
