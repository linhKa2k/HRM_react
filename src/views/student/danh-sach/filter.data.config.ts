import { IStatusTable } from "./types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<IStatusTable>[] => [ 
        {
            field: "name",
            label: "Tên",
        },
        {
            field: "age",
            label: "Tuổi",
        },
        {
            field: "class",
            label: "Lớp",
        }
    ];