import { FormInstance } from "antd";

import { BasicForm } from "/@/components/Form";
  
import { dataConfig } from "./data.config";

function LoginForm({  form }: {form: FormInstance }) {
    return ( 
        <div> 
            <BasicForm dataForm={dataConfig()} formSchema={form} />
        </div>
    )
}

export default LoginForm