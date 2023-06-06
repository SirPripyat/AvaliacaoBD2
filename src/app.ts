import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.database();
  }

  public middleware() {
    this.express.use(express.json());
  }

  public routes() {
    this.express.use(routes);
  }

  private async database() {
    const linkConnection = "mongodb://localhost:27017";

    try {
      mongoose.set("strictQuery", true);
      await mongoose.connect(`${linkConnection}/retail-store`);
      console.log("Connect database success");
    } catch (error) {
      console.error("Connect database fail. Error: ", error);
    }
  }
}

export default new App().express;
