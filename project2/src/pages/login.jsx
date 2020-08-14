import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Form, Button, } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css';
import './app.scss'
const FormItem = Form.Item

export default function Login() {
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const history = useHistory()
    return <div >
        <Form className="login-form">
            <FormItem>
                <Input placeholder="请输入用户名" maxLength={5} onChange={(event) => { setName(event.target.value) }}></Input>
            </FormItem>
            <FormItem>
                <Input placeholder="请输入用密码" maxLength={5} type="password" onChange={(event) => { setPwd(event.target.value) }}></Input>
            </FormItem>
            <label htmlFor="">{name}---{pwd}</label>
            <FormItem>
                <Button type="primary" onClick={() => {
                    login(name, pwd).then((res) => {
                        let resData = res.data
                        if (resData.code === 0) {
                            history.push('/home')
                        }
                    })
                }}>登录</Button>
            </FormItem>
        </Form>
    </div>
}

function login(name, pwd) {
    return axios.get("/login.json", {
        params: {
            name, pwd
        }
    })
}