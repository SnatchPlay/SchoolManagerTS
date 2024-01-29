
// import UserRoleService from './BL/UserRoleService';

// const userRoleService = new UserRoleService();

// // Example usage of the service methods
// async function exampleUsage() {
//   try {
//     // Get all roles
//     const allRoles = await userRoleService.getAllRoles();
//     console.log('All Roles:', allRoles);

//     // Get a role by ID
//     const roleIdToRetrieve = 1; // Replace with a valid role ID
//     const roleById = await userRoleService.getRoleById(roleIdToRetrieve);
//     console.log('Role by ID:', roleById);

//   } catch (error:any) {
//     console.error('Error:', error.message);
//   } 
// }

// // Call the exampleUsage function
// exampleUsage();
import cors from 'cors';
import express from "express";
import  initRoutes  from "./PL/Routes";

import RolesController from './PL/RolesController';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const rolesController = new RolesController();
initRoutes(app);

app.use('/api', rolesController.getRouter());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
