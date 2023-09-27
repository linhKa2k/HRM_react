import { BaseApi } from "../baseApi";
import { IStatus } from "./types";
import { DOMAIN_DEVELOPMENT } from "../apiConst";
import { EndPoint } from "../apiConst";

export class StudentApi extends BaseApi<IStatus> {
    constructor() {
      super(`${DOMAIN_DEVELOPMENT}${EndPoint.student}`);
    }


  
  }
  