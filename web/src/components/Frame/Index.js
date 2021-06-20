import React from 'react';
import {withRouter} from 'react-router-dom';
import {Layout, Menu, Dropdown, Avatar, message} from 'antd';
import {CaretDownOutlined, UserOutlined} from '@ant-design/icons';
import {adminRoutes} from "../../routes";
import "./Frame.css";
import {clearToken} from "../../utils/auth";

const {Header, Content, Sider} = Layout;
const routes = adminRoutes.filter(route => route.isShow)

function Index(props) {
    const popMenu = (
        <Menu
        onClick={p => {
            if (p.key === "logOut") {
                clearToken();
                props.history.push("/login");
            } else {
                message.info(p.key);
            }
        }}>
            <Menu.Item key="logOut">退出</Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <Header className="header">
                <div className="logo" style={{fontWeight: "900", fontSize: "26px", letterSpacing: ".5rem"}}>
                    管理平台
                </div>
                <Dropdown overlay={popMenu}>
                    <div>
                        <Avatar icon={<UserOutlined/>} style={{backgroundColor: "#87d068"}}/>
                        <span style={{paddingLeft: "1rem", fontSize: "16px"}}>管理员</span>
                        <CaretDownOutlined/>
                    </div>
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        {routes.map(route => {
                            return (<Menu.Item key={route.path}
                                               onClick={p => props.history.push(p.key)}>
                                {route.icon}
                                {route.title}</Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{padding: '16px'}}>
                    <Content
                        className="site-layout-background"
                        style={{
                            background: "white",
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default withRouter(Index);
