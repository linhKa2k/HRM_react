import { LoginForm } from "./index";
import { MODE } from "/@/utils";
import { Form, Button, Typography, message } from "antd";
import "./index.css";
import { useRedirect } from "../useRedirect";

function LoginView() {
  const [form] = Form.useForm();
  const { goRegister, goForgotPassword } = useRedirect();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async () => {
    try {
      await form.validateFields();
      messageApi.open({
        type: "success",
        content: "Đăng nhập thành công",
      });
    } catch (error) {}
  };

  return (
    <div className="login-style">
      {contextHolder}
      <div className="form-login">
        <h1 className="title-login">Login</h1>
        <LoginForm form={form} mode={MODE.ADD} />
        <div className="form-btn-register">
          <Button type="primary" onClick={() => handleLogin()}>
            Đăng nhập
          </Button>
        </div>
        <div className="form-navigate">
          <Typography.Link underline onClick={() => goRegister()}>
            Đăng Ký
          </Typography.Link>
          /
          <Typography.Link underline onClick={() => goForgotPassword()}>
            Quên mật khẩu?
          </Typography.Link>
        </div>
      </div>
    </div>
  );
}
export default LoginView;
