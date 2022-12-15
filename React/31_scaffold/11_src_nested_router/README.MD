# Router

### 路由组件和一般组件的区别：
1. 写法不同
    - 一般组件：`<Demo/>`
    - 路由组件：`<Route path="/demo" element={<Demo/>}/>`
2. 存放位置不同
    - 一般组件：components
    - 路由组件：pages
3. 收到的props不同
    - 一般组件：写组件标签时传递了什么就接收到什么
    - 路由组件：接收到三个固定的属性
        - history
        - location
        - match


