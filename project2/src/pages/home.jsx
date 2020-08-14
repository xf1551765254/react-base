import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.scss'
import { Table } from 'antd'
import "antd/dist/antd.css"
export default function Home() {
    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    const columns = [
        {
            title: "地区",
            dataIndex: 'area'
        }, {
            title: "Java",
            dataIndex: 'java'
        }, {
            title: "PHP",
            dataIndex: 'php'
        }, {
            title: "Node",
            dataIndex: 'node'
        }, {
            title: "JS",
            dataIndex: 'js'
        }
    ];
    useEffect(() => {
        axios.get("/data.json").then(res => {
            let resData = res.data
            if (resData.code === 0) {
                setData(resData.data)
            }
        })
    }, [])
    return <div className="home">
        <h1>语言大数据报告</h1>
        <div className="warp">
            <div className="nav">
                <a className={index === 0 ? 'checked' : ''} onClick={() => { setIndex(0) }}>语言动态</a>
                <a className={index === 1 ? 'checked' : ''} onClick={() => { setIndex(1) }}>语言地图</a>
                <a className={index === 2 ? 'checked' : ''} onClick={() => { setIndex(2) }}>语言热搜</a>
                <a className={index === 3 ? 'checked' : ''} onClick={() => { setIndex(3) }}>语言播报</a>
            </div>
            <p>数据纯属虚构</p>
            <Table
                bordered
                dataSource={data} columns={columns} />
            <Link to="/" className="nav-link">根页面</Link>
        </div>
    </div>
}

// class 组件实现页面交互
// export default class Home extends React.Component {
//     state = {
//         data: [],
//         index: 0,
//     }
//     componentDidMount = () => {
//         axios.get("/data.json").then(res => {
//             let resData = res.data
//             if (resData.code === 0) {
//                 this.setState({
//                     data: resData.data
//                 });
//             }
//         })
//     }
//     // componentWillUnmount = () => {
//     //     this.setState = () => false;
//     // }
//     handleSwitch = (index) => {
//         this.setState({
//             index
//         });
//     }
//     render() {
//         const columns = [
//             {
//                 title: "地区",
//                 dataIndex: 'area'
//             }, {
//                 title: "Java",
//                 dataIndex: 'java'
//             }, {
//                 title: "PHP",
//                 dataIndex: 'php'
//             }, {
//                 title: "Node",
//                 dataIndex: 'node'
//             }, {
//                 title: "JS",
//                 dataIndex: 'js'
//             }
//         ];
//         const index = this.state.index
//         const data = this.state.data
//         return <div className="home">
//             <h1>语言大数据报告</h1>
//             <div className="warp">
//                 <div className="nav">
//                     <a className={index === 0 ? 'checked' : ''} onClick={() => this.handleSwitch(0)}>语言动态</a>
//                     <a className={index === 1 ? 'checked' : ''} onClick={() => this.handleSwitch(2)}>语言地图</a>
//                     <a className={index === 2 ? 'checked' : ''} onClick={() => this.handleSwitch(3)}>语言热搜</a>
//                     <a className={index === 3 ? 'checked' : ''} onClick={() => this.handleSwitch(4)}>语言播报</a>
//                 </div>
//                 <p>数据纯属虚构</p>
//                 <Table
//                     bordered
//                     dataSource={data} columns={columns} />
//                 <Link to="/" className="nav-link">根页面</Link>
//             </div>
//         </div>
//     }
// }