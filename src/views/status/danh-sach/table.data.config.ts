import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { IStatusTable } from "./types";

export const columns: BasicColumnModel<IStatusTable>[] = [
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
  },
];
