import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import 'antd/dist/antd.css'
export default function App() {
    // 函数没有作用域 
    console.log('作用域：' + this)
    const [count, setCount] = useState(10)
    useEffect(() => {
        console.log('didMount')
        //ajax请求
        setCount(100)
    }, [])
    return <div > app
         <Link to="/login">跳转到login</Link>
        <Link to="/home">跳转到home</Link>
        <Button onClick={() => { setCount(count + 1) }}>count</Button>
        <div>{count}</div>
    </div>
}

// export default class app extends React.Component {
//     handle = () => {
//         this.props.history.push('./home')
//     }
//     render() {
//         return <div > app
//             <Link to="/login">跳转到login</Link>
//             <Link to="/home">跳转到home</Link>
//             <button onClick={this.handle}>点击到home</button>
//             <p>ID:{this.props.match.params.id}</p>
//         </div>
//     }
// }