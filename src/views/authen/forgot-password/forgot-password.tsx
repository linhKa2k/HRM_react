import { ForgotPasswordForm } from "./index";
import { MODE } from "/@/utils";
import { Form, Button } from "antd";
import "./index.css";
import { useRedirect } from "../useRedirect"; 

function ForgotPasswordView() {
  const [form] = Form.useForm();
  const { goChangePassword, goBack } = useRedirect();

  const handleForgotPassword = async () => {
    try {
      await form.validateFields();
      goChangePassword();
    } catch (error) {}
  };
  

  return (
    <div className="forgot-style">
      <div className="form-forgot">
        <h1 className="title-forgot">Quên mật khẩu?</h1>
        <ForgotPasswordForm form={form} mode={MODE.ADD} />
        <div className="form-btn-forgot">
          <Button type="primary" onClick={() => goBack()}>
            Hủy
          </Button>
          <Button type="primary" onClick={() => handleForgotPassword()}>
            Tiếp Tục
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ForgotPasswordView;
