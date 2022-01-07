## TODO_LIST 案例

### 一、prop-types
使用PropTypes 对父组件传递的props进行： 类型、必要性的限制
1. 安装prop-types
```shell
 yarn add prop-types
```
2. 在组件中引入
```javascript
import PropTypes from 'prop-types';
```
3. 对父组件传毒的props进行类型、必要性的限制
```
static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired
}
```
### 二、nanojs
1. 安装nanojs
```shell
yarn add nanojs
```
2. 在组件中引用
```javascript
import {nanoid} from "nanoid";
```
3. 使用
```
const todo = {
    id: nanoid(),
    name: target.value,
    done: false
};
```

### 三、组件之间的传值
1. 父组件给子组件传值
   - 使用`props`
2. 子组件给父组件传值
   - 父组件中定义回调函数，利用`props`传递给子组件
   - 子组件中从`props`获取到父组件中的回调函数，然后调用

