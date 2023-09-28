import http from "../http-common";

class DocumentService {

  loadSearchQuery() {
    return http.get("/user/users");
  }


  // loadUsers(data: string) {
  //   return http.get(`/user/users?${data}`);
  // }

  // loadRoles() {
  //   return http.get("/user/roles");
  // }
  
  // loadPermission() {
  //   return http.get("/user/permission");
  // }

  // loadInterfaces() {
  //   return http.get(`/user/interfaces`);
  // }

  // loadRolePermission() {
  //   return http.get(`/user/role_permission`);
  // }

  // loadUserRoles() {
  //   return http.get(`/user/user_roles`);
  // }

  // getUserRolesSave(data: any) {
  //   return http.post("/user/user_roles/save", data);
  // }

  // getRolePermissionSave(data: any) {
  //   return http.post("/user/role_permission/save", data);
  // }

}

export default new DocumentService();
