import { RegisterForm } from "./index";
import { MODE } from "/@/utils";
import { Form, Button, message } from "antd";
import "./index.css";
import { useRedirect } from "../useRedirect";
import { IRegister } from "./form-register";
function RegisterView() {
  const [form] = Form.useForm();
  const { goLogin, goBack } = useRedirect();
  const [messageApi, contextHolder] = message.useMessage();

  const handleRegister = async () => {
    try {
      await form.validateFields();
      const dataFrom = form.getFieldsValue() as IRegister;
      if (dataFrom.password !== dataFrom.confirmPassword) {
        messageApi.open({
          type: "error",
          content: "Mật khẩu nhập lại không khớp",
        });
        return;
      }
      goLogin();
    } catch (error) {}
  };

  return (
    <div className="register-style">
      {contextHolder}
      <div className="form-register">
        <h1 className="title-register">Register</h1>
        <RegisterForm form={form} mode={MODE.ADD} />
        <div className="form-btn-register">
          <Button type="primary" onClick={() => goBack()}>
            Trở về
          </Button>
          <Button type="primary" onClick={() => handleRegister()}>
            Đăng ký
          </Button>
        </div>
      </div>
    </div>
  );
}
export default RegisterView;
