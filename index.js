import Message from './src/index'

const install = function(Vue) {
  Vue.components('Message', Message)

  Vue.prototype.$Message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install