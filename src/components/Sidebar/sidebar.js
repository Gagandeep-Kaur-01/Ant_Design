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
  EllipsisOutlined,
  MenuUnfoldOutlined 
} from '@ant-design/icons';
import Dashboard from '../Pages/Dashboard/dashboard';
import Form from '../Pages/Form/form';
import Option1 from '../Pages/Option/option1'
import Option2 from '../Pages/Option/option2'
import SidebarWrapper from './sidebar.style';
import Drawer from '../Pages/Drawer/drawer'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar1 extends React.Component {
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
     <SidebarWrapper>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="sidebarHeading" >
            <h2>Ant Design</h2>
          </div> 
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <NavLink
                to={{
                pathname: '/dashboard'                                
                }}>
                Dashboard
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

            <Menu.Item key="5" icon={<MenuUnfoldOutlined />}>
              <NavLink to={{
                pathname: '/drawer'                                
                }}>Drawer
              </NavLink>              
            </Menu.Item>                 
            
          </Menu>
        </Sider>

        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, background: "#fff" }} />
            <Content style={{ margin: '0 16px' }}>            
              <Switch>
                <Route path="/dashboard" component={() => <Dashboard />}></Route>                    
                <Route path="/form" component={() => <Form />} />     
                <Route path="/option1" component={() => <Option1 />} />     
                <Route path="/option2" component={() => <Option2 />} />
                <Route path="/drawer" component={() => <Drawer />} />           
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Form ©2020</Footer>
        </Layout>
        
      </Layout>
     </SidebarWrapper> 
      
    );
  }
}

export default Sidebar1;