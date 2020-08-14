import React from 'react';
import './App.scss';
import {
  Input,
  Button
} from 'antd'
import 'antd/dist/antd.css'


class App extends React.Component {
  state = {
    val: '',
    list: []
  }
  handerAdd = () => {
    let {
      val,
      list
    } = this.state
    list.push(val)
    this.setState({
      list
    });
  }
  handleChange = (event) => {
    let val = event.target.value
    this.setState({
      val
    });
  }
  render() {
    const {
      val,
      list
    } = this.state
    return ( <
      div className = "App" >

      {
        /* <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header> 
                 */
      } <
      h1 > 1233 < /h1> <
      Input type = "text"
      value = {
        val
      }
      style = {
        {
          width: 300
        }
      }
      onChange = {
        this.handleChange
      }
      /> <
      Button onClick = {
        this.handerAdd
      } > 添加 < /Button> <
      ul > {
        list.map((item, index) => {
          return <li key = {
            index
          } > {
            item
          } < /li>
        })
      } <
      /ul> <
      /div>
    );
  }
}


export default App;