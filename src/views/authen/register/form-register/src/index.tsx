import { FormInstance } from "antd";

import { BasicForm } from "/@/components/Form"; 
import { MODE } from "/@/utils"; 

import { dataConfig } from "./data.conlig"; 

function RegisterForm({ mode, form }: { mode: MODE, form: FormInstance }) {
    return ( 
        <div>
            <BasicForm dataForm={dataConfig(mode)} formSchema={form} mode={mode} />
        </div>
    )
}

export default RegisterForm