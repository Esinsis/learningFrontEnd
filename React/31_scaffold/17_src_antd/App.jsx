import React, {Component} from 'react';
import { Button,DatePicker } from 'antd';
import {WechatOutlined} from '@ant-design/icons';
import './App.less'

class App extends Component {

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <hr/>
                <WechatOutlined />
                <hr/>
                <DatePicker />
            </div>
        );
    }
}

export default App;