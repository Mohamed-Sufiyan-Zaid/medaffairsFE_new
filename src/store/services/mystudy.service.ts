import http from "../http-common";

class StudyDataService {
  getTopStudies() {
    return http.get("/study/mystudies?count=5");
  }

  getStudiesActiveColumns() {
    return http.get("/study/columns/active");
  }
  
  getMyStudiesCount() {
    return http.get("/study/mystudies/count");
  }

  getMyStudies(data: string) {
    return http.get(`/study/mystudies?${data}`);
  }

  getStudy(id: any) {
    return http.get(`/study/${id}`);
  }

  createInitiate(data: any) {
    return http.post("/study/initiate", data);
  }

  updateInitiate(id: any, data: any) {
    return http.put(`/study/initiate/${id}`, data);
  }

  updateInitiateDone(id: any, data: any) {
    return http.put(`/study/initiate/complete/${id}`, data);
  }

  updateBuild(id: any, data: any) {
    return http.put(`/study/build/${id}`, data);
  }

  updateBuildDone(id: any, data: any) {
    return http.put(`/study/build/complete/${id}`, data);
  }

  updateWorkspace(id: any, data: any) {
    return http.put(`/study/workspace/${id}`, data);
  }

  updateWorkspaceDone(id: any, data: any) {
    return http.put(`/study/workspace/complete/${id}`, data);
  }

  updateComplete(id: any, data: any) {
    return http.put(`/study/complete/${id}`, data);
  }

  updateCompleteStudy(id: any, data: any) {
    return http.put(`/study/complete/final/${id}`, data);
  }

  abandonStudy(id: any) {
    return http.put(`/study/abandon/${id}`);
  }

}

export default new StudyDataService();
