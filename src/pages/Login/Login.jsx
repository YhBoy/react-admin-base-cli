import React, { Component } from 'react';
import './Login.less'

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default class Login extends Component{
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    
    render(){
        return ( <div className="login">
            <div className="login-title">用户登录</div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        { min:6 ,message:'不能小于6位' },
                        { max:20 ,message:'不能大于20位' },
                        { pattern:/^[0-9]*$/, message:'只能输入数字' }
                    ]}
                >
                    <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            //   const reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/  
                              if (value.length <6) {
                                return Promise.reject("不能小于6位");
                              }else if( value.length > 20 ){
                                return Promise.reject("不能大于20位");    
                              }else{
                                return Promise.resolve();
                              }
                            },
                        })
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
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
        </div> )
    }
}


