import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  EllipsisOutlined
} from '@ant-design/icons';
import Form from '../Pages/Form/form';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
     
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="sidebarHeading" >
            <h2>Ant Design</h2>
          </div> 
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <NavLink
                to={{
                pathname: '/1'                                
                }}>
                1
              </NavLink>
            </Menu.Item>
            
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="2" icon={<UserAddOutlined />}>
                 <NavLink
                   to={{
                   pathname: '/form'                                
                   }}>
                   Add
                 </NavLink>
                </Menu.Item>              
            </SubMenu> 

            <Menu.Item key="3" icon={<PieChartOutlined />}>
              <NavLink to={{
                pathname: '/option1'                                
                }}>Option 1
              </NavLink>
            </Menu.Item>

            <Menu.Item key="4" icon={<DesktopOutlined />}>
              <NavLink to={{
                pathname: '/option2'                                
                }}>Option 2
              </NavLink>              
            </Menu.Item>                   
            
          </Menu>
        </Sider>

        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, background: "#fff" }} />
            <Content style={{ margin: '0 16px' }}>            
              <Switch>                   
                <Route path="/form" component={() => <Form />} /> 
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Form ©2021</Footer>
        </Layout>
        
      </Layout>
     
      
    );
  }
}

export default Sidebar;