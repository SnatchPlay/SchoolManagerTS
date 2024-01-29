class UserRole{
  Id : number;
  RoleName : string;
  RowInsertTime : Date;
  RowUpdateTime: Date;
  constructor(
      id: number,
      roleName: string,
      rowInsertTime: Date,
      rowUpdateTime: Date
  ){
      this.Id=id;
      this.RoleName=roleName;
      this.RowInsertTime=rowInsertTime;
      this.RowUpdateTime=rowUpdateTime;
  }
}
export default UserRole;
