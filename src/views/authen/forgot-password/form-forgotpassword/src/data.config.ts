import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";
import { isRequired,isEmail } from "/@/utils/ruleUtil";

export const dataConfig = (): FormSchemaModel<{ 
    email: string
}>[] => { 
    return [
        {
            field: 'email',
            label: 'Email',
            colProps: {
                xl: 20
            },
            rules: [isRequired('vui lòng nhập email'),isEmail()],
        }
    ]
}