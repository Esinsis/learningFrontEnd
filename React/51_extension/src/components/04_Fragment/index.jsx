import React, {Component, Fragment} from 'react';

class Demo extends Component {
    render() {
        return (
            // 只能输入key属性，其他属性都不可以，
            // 如果使用空标签的话，则什么属性都不可以写
           <Fragment key={1}>
               <input type="text"/>
               <input type="text"/>
           </Fragment>
        );
    }
}

export default Demo;