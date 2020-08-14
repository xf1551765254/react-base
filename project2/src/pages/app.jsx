import React from 'react';
import { Link } from 'react-router-dom'
// import { Button } from 'antd'
import 'antd/dist/antd.css'
export default function App() {
    // 函数没有作用域 
    console.log('作用域：' + this)
    return <div style={{ textAlign: 'center' }}> app
        <br />
        <Link to="/login">跳转到登录</Link>
        <br />
        <Link to="/home">跳转到首页</Link>
        <br />
        {/* <Button onClick={() => { setCount(count + 1) }}>count</Button> */}
        {/* <div>{count}</div> */}
    </div>
}
