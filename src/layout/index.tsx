import React from 'react';
import { Outlet } from 'react-router-dom'
import { Layout, Avatar, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import "./index.css"
import MenuSideBar from '../components/MenuSileBar/index'

const { Content, Sider } = Layout;

const LayoutDefault: React.FC = () => {
  return (
    <Layout className='layout-style' >
      <Sider className='sider-style'>
        <div className='sider-logo-style' >
          <Avatar size={100} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        </div>
        <MenuSideBar />
        <div>
          <Button className='sider-logout-btn' type='text' icon={<LogoutOutlined />} >
            Đăng Xuất
          </Button>
        </div>
      </Sider>
      <Layout>
        <Content className='layout-content-style' >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutDefault;