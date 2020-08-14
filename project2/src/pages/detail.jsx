import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { Button } from 'antd'
import 'antd/dist/antd.css'
export default function Deetail() {
    const params = useParams()
    const history = useHistory()
    return <div > detail
    detail
         {JSON.stringify(params)}
        {params.id}
        <Button onClick={() => {
            history.push('/')
        }}>home</Button>
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
//         </div>
//     }
// }