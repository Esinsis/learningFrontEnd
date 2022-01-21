import React, {Component} from 'react';
// import qs from 'querystring';

const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'}
]

class Details extends Component {

    render() {
        console.log(this.props)
        // const {id, title} = this.props.match.params;
        // const {search} = this.props.location;
        // const {id, title} = qs.parse(search.slice(1));
        // 接收search参数
        const {id, title} = this.props.location.state;
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