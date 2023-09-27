import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";
import { regexSoDienThoai, isEmail, isRequired, regexOnlyCharacter } from "/@/utils/ruleUtil";

export const dataConfig = (mode?: MODE): FormSchemaModel<{
    userName: string,
    fullName: string,
    email: string,
    phoneNumber: number,
    password: string,
    confirmPassword: string
}>[] => {
    return [
        {
            field: 'userName',
            label: 'Tên Người dùng',
            colProps: {
                xl: 20
            },
            rules: [isRequired("Bắt buộc nhập")],
        },
        {
            field: 'fullName',
            label: 'Họ và Tên',
            colProps: {
                xl: 20 
            },
            rules: [regexOnlyCharacter(), isRequired('Bắt buộc nhập')],
        },
        {
            field: 'email',
            label: 'Email',
            colProps: {
                xl: 20
            },
            rules: [isEmail(), isRequired('Bắt buộc nhập')],
        },
        {
            field: 'phoneNumber',
            label: 'Số điện thoại',
            rules: [regexSoDienThoai(), isRequired('Bắt buộc nhập')],
            colProps: {
                xl: 20
            }

        },
        {
            field: 'password',
            label: 'Mật khẩu',
            colProps: {
                xl: 20
            },
            rules: [isRequired('Bắt buộc nhập')],
            component: 'InputPassword'
        },
        {
            field: 'confirmPassword',
            label: 'Nhập lại mật khẩu',
            colProps: {
                xl: 20
            },
            rules: [isRequired('Bắt buộc nhập')],
            component: 'InputPassword'
        }
    ]
}