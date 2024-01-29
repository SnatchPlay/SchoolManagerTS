import UserRole from '../DL/Models/UserRole';
import UserRoleRepository from '../DL/Repository/UserRoleRepository';
import config from '../DL/Repository/AppDataSource'

class UserRoleService {
  private readonly userRoleRepository;

  constructor() {
    this.userRoleRepository = new UserRoleRepository(config);
  }

  async getAllRoles(): Promise<UserRole[]> {
    return this.userRoleRepository.getAllRoles();
  }

  async getRoleById(id: number): Promise<UserRole | undefined> {
    return this.userRoleRepository.getRoleById(id);
  }

  async createRole(roleName: string): Promise<number> {
    const rowInsertTime = new Date();
    const rowUpdateTime = new Date();
    
    const userRole = new UserRole(0, roleName, rowInsertTime, rowUpdateTime);
    
    return this.userRoleRepository.createRole(userRole);
  }

  async updateRole(id: number, roleName: string): Promise<void> {
    const existingRole = await this.userRoleRepository.getRoleById(id);

    if (!existingRole) {
      throw new Error(`Role with ID ${id} not found.`);
    }

    existingRole.RoleName = roleName;
    existingRole.RowUpdateTime = new Date();

    await this.userRoleRepository.updateRole(existingRole);
  }

  async deleteRole(id: number): Promise<void> {
    const existingRole = await this.userRoleRepository.getRoleById(id);

    if (!existingRole) {
      throw new Error(`Role with ID ${id} not found.`);
    }

    await this.userRoleRepository.deleteRole(id);
  }
}

export default UserRoleService;
