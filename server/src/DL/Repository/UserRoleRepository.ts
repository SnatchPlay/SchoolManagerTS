import knex from 'knex';
import type { Knex } from 'knex';
import UserRole from '../Models/UserRole';

class UserRoleRepository {
  private readonly knexInstance;

  constructor(databaseConfig:Knex.Config) {
    this.knexInstance = knex(databaseConfig);
  }

  async getAllRoles(): Promise<UserRole[]> {
    return this.knexInstance('userrole').select('*');
  }

  async getRoleById(id: number): Promise<UserRole | undefined> {
    return this.knexInstance('userrole').where({ id: id }).first();
  }

  async createRole(userRole: UserRole): Promise<number> {
    const [roleId] = await this.knexInstance('userrole').insert(userRole);
    return roleId;
  }

  async updateRole(userRole: UserRole): Promise<void> {
    await this.knexInstance('userrole').where({ Id: userRole.Id }).update(userRole);
  }

  async deleteRole(id: number): Promise<void> {
    await this.knexInstance('userrole').where({ Id: id }).del();
  }
}

export default UserRoleRepository;
