import express, { Request, Response, Router } from 'express';
import UserRoleService from '../BL/UserRoleService';

class RolesController {
  private readonly router: Router;
  private readonly userRoleService: UserRoleService;

  constructor() {
    this.router = express.Router();
    this.userRoleService = new UserRoleService();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.getAllRoles.bind(this));
    this.router.get('/:id', this.getRoleById.bind(this));
    this.router.post('/', this.createRole.bind(this));
    this.router.put('/:id', this.updateRole.bind(this));
    this.router.delete('/:id', this.deleteRole.bind(this));
  }

  private async getAllRoles(req: Request, res: Response) {
    try {
      const roles = await this.userRoleService.getAllRoles();
      res.json(roles);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  private async getRoleById(req: Request, res: Response) {
    try {
      const roleId = parseInt(req.params.id, 10);
      const role = await this.userRoleService.getRoleById(roleId);
      if (role) {
        res.json(role);
      } else {
        res.status(404).json({ error: `Role with ID ${roleId} not found.` });
      }
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  private async createRole(req: Request, res: Response) {
    try {
      const { roleName } = req.body;
      const roleId = await this.userRoleService.createRole(roleName);
      res.json({ roleId });
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  private async updateRole(req: Request, res: Response) {
    try {
      const roleId = parseInt(req.params.id, 10);
      const { roleName } = req.body;

      await this.userRoleService.updateRole(roleId, roleName);
      res.json({ message: 'Role updated successfully.' });
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  private async deleteRole(req: Request, res: Response) {
    try {
      const roleId = parseInt(req.params.id, 10);
      await this.userRoleService.deleteRole(roleId);
      res.json({ message: 'Role deleted successfully.' });
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  public getRouter() {
    return this.router;
  }
}

export default RolesController;
