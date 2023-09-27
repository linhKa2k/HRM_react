import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";
import { isRequired } from "/@/utils/ruleUtil";

export const dataConfig = (mode?: MODE): FormSchemaModel<{
    password: string,
    confirmPassword: string
}>[] => {
    return [
        {
            field: 'password',
            label: 'Mật khẩu mới',
            colProps: {
                xl: 20
            },
            rules: [ isRequired('Mật khẩu mới')],
            component: 'InputPassword'
        },
        {
            field: 'confirmPassword',
            label: 'Nhập lại mật khẩu mới',
            colProps: {
                xl: 20
            },
            rules: [ isRequired('Nhập lại mật khẩu mới')],
            component: 'InputPassword'
        }
    ]
}