import React from "react";

function RolesView() {
  const [role, setRoles] = React.useState([]);
  const[roleId,setRoleId]=React.useState();
  const fetchData = () => {
    fetch("/api/roles")
      .then((response) => response.json())
      .then((data) => setRoles(data));
  };
  const fetchOne=()=>fetch("/api/roles/1").then((response)=>response.json()).then((data)=>setRoleId(data));
  
  React.useEffect(() => {
    fetchOne();
    fetchData();
  }, []);

  return Object.keys(role).length > 0 ? (
    <div>
      <h2>User Roles</h2>
      <ul>
        {role.map((role) => (
          <li key={role.id}>{role.role_name}</li>
        ))}
      </ul>
      <h2>{roleId}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default RolesView;