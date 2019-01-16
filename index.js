import Message from './message/index'

const install = function(Vue) {
  Vue.components(Message, Message)

  Vue.prototype.$Message = Message.MessageConstructor
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default install