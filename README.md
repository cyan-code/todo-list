# a simple todo editor build with Bulma and Vue
**需求：**实现待办事项新增、删除、切换是否完成

**项目逻辑：**

1. 将todos渲染到页面：
   1. 使用Bulma搭建静态页面
   2. 在data当中创建一个数组todos，存储todo对象，包括`{id, content, isDone}`
   3. 通过`v-for`和模版字符串，将todos数组渲染到页面

2. 给按钮添加事件
   1. 切换：通过传递点击事件的id值，利用数组的map方法，修改指定id的todo项isDone的值
   2. 删除：通过传递点击事件的id值，利用数组filter方法，过滤掉等于点击id的todo项
3. input新增事项
   1. 通过`v-model`给`input`框绑定绑定data数据`newTodo`(双向绑定)
   2. 给新增按钮添加点击和键盘事件（@keyup.enter），将`newTodo`的数据增加id，isdone组成对象`unshift`到数组中。
   3. 判断是否为空和重复
   4. input在事件后清空、并通过`$refs`重新获得焦点