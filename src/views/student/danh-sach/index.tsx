import { BasicTable } from "/@/components/Table"
import { dataConfig } from "./filter.data.config";
import { columns } from "./table.data.config";
import { IStatusTable } from "./types";
import { useTableActionsBuilder } from "/@/components/Table/src/tableActionsBuilder";
import { BasePagination } from "/@/apis/types";
import { useStatusApi, useStudentApi } from "/@/apis";
import { useComponentRegister } from "/@/components/Form/src/hook/useComponentRegister";
import { InfoCircleOutlined } from "@ant-design/icons";
import { message } from 'antd';
function student() {
    useComponentRegister('showa-lert', <InfoCircleOutlined />)
    const { studentApi } = useStudentApi();
    const [messageApi, contextHolder] = message.useMessage();
    const handleApi = async (params: {
        name: string,
        age: number,
        class: string
        page: number;
        pageSize: number;
    }): Promise<BasePagination<IStatusTable>> => {
        let dataForm: any;
        let total: any;
        if (!!params.name) {
            const tranParams = {
                name: params.name,
                _page: params.page,
                _limit: params.pageSize,
            };
            dataForm = await studentApi.getAll(tranParams);
            total = await studentApi.getAll({ name: params.name });
        } else {
            dataForm = await studentApi.getAll({
                _page: params.page,
                _limit: params.pageSize,
                name: params.name,

            });
            total = await studentApi.getAll();
        }

        return {
            items: dataForm,
            total: total.length,
        };
    };

    const showAlert = () => {
        console.log("da vao day");
        messageApi.info('Hello, Ant Design!');
    }

    const actionColum = {
        width: 100,
        actions: (record: IStatusTable) => {
            const [builder] = useTableActionsBuilder();
            const action = builder
                .addView({ onClick: () => { } })
                .addEdit({ onClick: () => { } })
                .addRemove(() => { })
                .addAction({
                    icon: 'showa-lert',
                    onClick: showAlert
                })
                .build();
            return action;
        },
    };
    return (
        <div>
            {contextHolder}
            <BasicTable dataForm={dataConfig()} columns={columns} api={handleApi} actionColum={actionColum} />
        </div>
    )
}
export default student;