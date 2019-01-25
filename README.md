# message

> A Vue.js project

## Build Setup

``` bash
# description
一个消息弹窗插件

# install dependencies
npm install message-tip

# import to your project
import Message from 'message-tip'

Vue.use(Message)

# how to use
this.$Message('This is message tip !')
this.$Message({message: 'This is message tip !', type: 'success', duration: 3000})
# type: 'info' or 'warn' or 'success' or 'error'
# duration: {
#   type: Number,
#   default: 2000
# }
