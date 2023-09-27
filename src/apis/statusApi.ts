import { StatusApi } from "./statusApi/index";
import { StudentApi } from "./studentApi/index";

export class XuLyStatusApi {
  statusApi: StatusApi;
  constructor() {
    this.statusApi = new StatusApi();

  }
}
export class XuLyStudentApi {
  studentApi: StudentApi;
  constructor() {
    this.studentApi = new StudentApi();
  }
}
