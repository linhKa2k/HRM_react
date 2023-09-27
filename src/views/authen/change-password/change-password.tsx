import { ChangePasswordForm } from "./index";
import { MODE } from "/@/utils";
import { Form, Button, Avatar, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import "./index.css";
import { useRedirect } from "../useRedirect";

function ChangePasswordView() {
  const [form] = Form.useForm();
  const { goLogin, goBack } = useRedirect();
  const [messageApi, contextHolder] = message.useMessage();

  const handleChangePassword = async () => { 
    try {
      await form.validateFields();
      const dataFrom = form.getFieldsValue();
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
    <div className="change-style">
      {contextHolder}
      <div className="form-change">
        <div className="form-avatar">
          <Avatar size={64} icon={<LockOutlined />} className="avatar" />
        </div>

        <h1 className="title-change">Thay đổi mật khẩu</h1>
        <ChangePasswordForm form={form} mode={MODE.ADD} />
        <div className="form-btn-change">
          <Button type="primary" onClick={() => goBack()}>
            Hủy
          </Button>
          <Button type="primary" onClick={() => handleChangePassword()}>
            Thay đổi
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ChangePasswordView;
