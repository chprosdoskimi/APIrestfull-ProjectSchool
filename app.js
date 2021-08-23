import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config();

import "./src/database";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import homeRoutes from "./src/routes/home";
import userRoutes from "./src/routes/user";
import tokenRoutes from "./src/routes/token";
import studentRoutes from "./src/routes/student";
import photoRoutes from "./src/routes/photo";

const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by Cors."));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }
  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/students/", studentRoutes);
    this.app.use("/photos/", photoRoutes);
  }
}

export default new App().app;