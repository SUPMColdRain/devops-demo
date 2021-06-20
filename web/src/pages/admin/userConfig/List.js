import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Card, Table, Button, Popconfirm} from "antd";

import {delOne} from "../../../services/userConfig";
import {loadUserConfig} from "../../../store/action/userConfig";

function List(props) {
    console.log('List props = ', props)

    const {list, page, total} = props

    useEffect(() => {
        props.dispatch(
            // 使用对象作为参数
            loadUserConfig({
                page: page
            })
        )
    }, []);

    const loadData = () => {
        props.dispatch(
            // 使用对象作为参数
            loadUserConfig({
                page: page
            })
        )
    }

    // 组件初始化的时候执行
    // render方法三个参数：1.dataIndex对应的值；2.dataSource属性对象；3.下标
    const columns = [
        {
            title: '用户名',
            key: 's_username',
            dataIndex: 's_username',
            // render: (txt, record, index) => index + 1
        }, {
            title: '权限',
            dataIndex: 's_admin',
            align: 'center',
            width: 120,
            render: (txt, record) => record.s_admin ? '管理员' : '非管理员'
        }, {
            title: '创建日期',
            dataIndex: 'createDate',
            render: (txt, record) => record.createDate.replace(/(\w*)T(.*).000Z/g, "$1 $2")
        }, {
            title: '更新日期',
            dataIndex: 'updateDate',
            render: (txt, record) => record.updateDate.replace(/(\w*)T(.*).000Z/g, "$1 $2")
        }, {
            title: '操作',
            render: (text, record, index) => {
                return (
                    <div>
                        <Button type='primary' size='small' onClick={() => {
                            props.history.push(`/admin/userConfig/edit/${record.s_username}`);
                        }}>修改</Button>
                        <Popconfirm
                            title='你确定删除此用户?'
                            onCancel={console.log('用户取消删除')}
                            onConfirm={() => {
                                console.log('用户确认删除')
                                delOne(record.s_username).then(res => {
                                    loadData()
                                })
                            }}
                        >
                            <Button style={{margin: '0 1rem'}} type='danger' size='small'>删除</Button>
                        </Popconfirm>
                    </div>
                )
            }
        }
    ]

    return (
        <Card title='用户列表' extra={
            <Button type='primary' size='small' onClick={() => props.history.push('/admin/userConfig/edit')}>
                新增用户
            </Button>}>
            <Table
                rowKey='s_username'
                pagination={{
                    total,
                    defaultPageSize: 10,
                    defaultCurrent: page,
                    onChange: (p) => {
                        props.dispatch(loadUserConfig({page: p}))
                    }
                }}
                columns={columns}
                bordered
                dataSource={list}
            />
        </Card>
    )
}

// 只映射userConfig
export default connect(state => state.userConfig)(List)
