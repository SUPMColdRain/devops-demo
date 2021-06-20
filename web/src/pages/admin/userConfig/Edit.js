import React, {useEffect, useRef} from 'react'
import {Form, Card, Input, Button, message, Switch} from 'antd';
import {createApi, getOneById, modifyOne} from '../../../services/userConfig'

function Edit(props) {
    const formRef = useRef(null)

    // 初始化的时候执行
    useEffect(() => {
        console.log(props.match);
        if (props.match.params.s_username) {
            getOneById(props.match.params.s_username)
                .then(res => {
                    console.log(res);
                    formRef.current.setFieldsValue({
                        username: res.data.s_username,
                        password: res.data.s_password,
                        admin: res.data.s_admin
                    })
                })
        }
    }, [props.match.params.s_username])

    const pwdValidate = (rule, value, callback) => {
        if (value.length < 6) {
            return callback('密码长度不能小于6位数')
        } else return callback()
    }

    // 成功回调
    const onFinish = (values) => {
        if (values) {
            console.log('success = ', values);
            if (props.match.params.s_username) {
                // 修改用户
                modifyOne(props.match.params.s_username, {...values})
                    .then(res => {
                        message.success("修改成功");
                        console.log('修改用户 = ', res)
                        props.history.push('/admin/userConfig')
                    })
                    .catch(err => {
                        message.success("修改失败");
                        console.log(err)
                    })
            } else {
                // 新建用户
                createApi({...values})
                    .then(res => {
                        message.success("新建成功");
                        console.log('新建用户 = ', res)
                        props.history.push('/admin/userConfig')
                    })
                    .catch(err => {
                        message.success("新建失败");
                        console.log(err)
                    })
            }
        }
    }

    // 失败回调
    const onFinishFailed = ({errorFields}) => {
        console.log('props = ', errorFields[0].s_username);
        message.error('请输入正确的内容')
    }

    return (
        <Card
            title='更新用户信息'
            extra={
                <Button onClick={() => props.history.push("/admin/userConfig")}>返回</Button>
            }
        >
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                ref={formRef}
            >
                <Form.Item
                    name="username"
                    label="用户名"
                    rules={[
                        {
                            required: true,
                            message: "请输入用户名"
                        },
                    ]}
                >
                    <Input placeholder='请输入用户名'/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: "请输入密码"
                        },
                        {
                            validator: pwdValidate
                        }
                    ]}
                >
                    <Input placeholder='请输入密码'/>
                </Form.Item>
                <Form.Item
                    name="admin"
                    label="管理员权限"
                    valuePropName="checked"
                    rules={[
                        {
                            required: true,
                            message: "请选择管理员权限"
                        }
                    ]}
                >
                    <Switch
                        checkedChildren="开启"
                        unCheckedChildren="关闭"
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' type='primary'>保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit;