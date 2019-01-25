import Message from './message/main.js'
const install = function (Vue) {
  Vue.component('Message', Message)

  Vue.prototype.$Message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
