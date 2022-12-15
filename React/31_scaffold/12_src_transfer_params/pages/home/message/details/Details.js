import React, {Component} from 'react';

const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'}
]

class Details extends Component {

    render() {
        console.log(this.props)
        // 接收params参数 ==> this.props.match.params
        const {id, title} = this.props.match.params;
        const foundResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {foundResult.content}</li>
            </ul>
        );
    }
}

export default Details;