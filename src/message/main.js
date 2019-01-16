import Vue from 'vue'
import Main from './Message'
const MessageConstructor = Vue.extend(Main)

// 所有消息弹窗
const messagePool = []
const getAnInstance = () => {
  // 如果有就取出第一个，没有就插件一个弹窗实例
  if (messagePool.length > 0) {
    const instance = messagePool[0]
    messagePool.splice(0, 1)
    return instance
  }
  return new MessageConstructor()
}

MessageConstructor.prototype.close = function () {
  this.show = false
}

const Message = function (options) {
  // let duration = options.duration || 3000

  let instance = getAnInstance()
  instance.closed = false
  // clearTimeout(instance.timer)
  instance.message = typeof options === 'string' ? options : options.message
  // instance.position = options.position || 'middle'
  instance.type = options.type || ''
  instance.duration = options.duration || 3000
  // instance.iconClass = options.iconClass || ''
  document.body.appendChild(instance.$el)

  return instance
};
  // 支持this.$message.success('xxx')方式，同于this.$message({type: 'success',message: 'xxx'})
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message
