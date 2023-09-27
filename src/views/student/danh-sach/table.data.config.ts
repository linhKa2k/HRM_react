import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { IStatusTable } from "./types";

export const columns: BasicColumnModel<IStatusTable>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "title",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "title",
  },
  {
    title: "Tuổi",
    dataIndex: "age",
    key: "title",
  },
  {
    title: "Lớp",
    dataIndex: "class",
    key: "title",
  },
];
