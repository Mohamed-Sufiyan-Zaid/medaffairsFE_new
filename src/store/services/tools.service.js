import http from "../http-common";

class ToolsDataService {
  getAll() {
    return http.get("/tool/tools");
  }

//   get(id) {
//     return http.get(`/tools/${id}`);
//   }

//   create(data) {
//     return http.post("/tools", data);
//   }

//   update(id, data) {
//     return http.put(`/tools/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tools/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tools`);
//   }

//   findByTitle(title) {
//     return http.get(`/tools?title=${title}`);
//   }
}

export default new ToolsDataService();
