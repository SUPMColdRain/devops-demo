import React from 'react';
import {Form, Input, Button, Card, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {setToken} from "../utils/auth";
import {loginApi} from "../services/auth";
import "./Login.css";

function Login(props) {
    const onFinish = values => {
        if (values) {
            loginApi({
                username: values.username,
                password: values.password
            }).then(res => {
                if (res.status === 200) {
                    message.success('登录成功')
                    setToken(res.token)
                    props.history.push('/admin')
                } else {
                    message.info(res.message)
                }
            }).catch(err => {
                message.error('用户名或密码错误');
            })
        }
    };

    return (
        <Card title="管理员登录界面" className="login-form">
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                           placeholder="用户名"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login;
