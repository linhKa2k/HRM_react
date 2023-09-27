import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";
import { isRequired } from "/@/utils/ruleUtil";

export const dataConfig = (mode?: MODE): FormSchemaModel<{
    userName: string,
    password: string,
}>[] => { 
    return [
        {
            field: 'userName',
            label: 'Tên Người dùng',
            colProps: {
                xl: 20
            },
            rules: [isRequired('Vui lòng nhập tên người dùng')],
        },
        {
            field: 'password',
            label: 'Mật khẩu',
            colProps: {
                xl: 20
            },
            rules: [isRequired('vui lòng nhập mật khẩu')],
            component:'InputPassword'
        }
    ]
}