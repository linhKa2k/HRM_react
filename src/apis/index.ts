import {XuLyStatusApi} from './statusApi'
import {XuLyStudentApi} from './statusApi'

let apiStatusInstance: InstanceType<typeof XuLyStatusApi>;
let apiStudentInstance: InstanceType<typeof XuLyStudentApi>;

export const useStatusApi = (): XuLyStatusApi => {
    if (!apiStatusInstance) {
        apiStatusInstance = new XuLyStatusApi();
    }
    return apiStatusInstance;
  };

export const useStudentApi = (): XuLyStudentApi => {
    if (!apiStudentInstance) {
        apiStudentInstance = new XuLyStudentApi();
    }
    return apiStudentInstance;
}
  