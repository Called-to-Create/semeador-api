import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import dotenvConfig from './config/dotenv.config';
import placeRoutes from './modules/place/place.routes';
import projectRoutes from './modules/project/project.routes';


class App {
  constructor() {
    dotenvConfig();
    this.express = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.express.use(projectRoutes.endpointBase, projectRoutes);
    this.express.use(placeRoutes.endpointBase, placeRoutes);
  }

  middlewares() {
    this.express.use(helmet());
    this.express.use(express.json());
    this.express.use(cors());
  }
}

export default new App().express;
