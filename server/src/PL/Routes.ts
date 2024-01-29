import express from 'express';
import RolesController from './RolesController';

const initRoutes = (app: express.Application) => {
  const rolesController = new RolesController(); // Instantiate the RolesController
  app.use('/api/roles', rolesController.getRouter()); // Use the controller's router
};

export default initRoutes;
