import Vue from 'vue'
import Main from './Message'
const MessageConstructor = Vue.extend(Main)

// 所有消息弹窗
const messagePool = []
const getAnInstance = () => {
  // 如果有就取出第一个，没有就创建一个弹窗实例
  if (messagePool.length > 0) {
    const instance = messagePool[0]
    messagePool.splice(0, 1)
    return instance
  }
  return new MessageConstructor({
    el: document.createElement('div')
  })
}

MessageConstructor.prototype.close = function () {
  this.show = false
  this.$el.addEventListener('transitionend', removeDom)
}

const removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

const Message = function (options) {
  let instance = getAnInstance()
  instance.closed = false
  instance.message = typeof options === 'string' ? options : options.message
  instance.type = options.type || ''
  instance.duration = options.duration || 2000

  document.body.appendChild(instance.$el)
  instance.show = true
  instance.$el.removeEventListener('transitionend', removeDom)
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
// Vue.prototype.$Message = Message

export default Message
