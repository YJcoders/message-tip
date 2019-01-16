<template>
  <transition name="fade">
    <div class="box-msg"
         v-show="show"
         @mouseenter="clearTimer"
         @mouseleave="startTimer">
      <span class="msg" :class="typeClass">
        {{message}}
        <i class="btn-close" @click="close">×</i>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: String,
      default: 'this is your message !'
    },
    type: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    typeClass () {
      return this.type ? `message-${this.type}` : ''
    }
  },
  created () {
    let app = []
    let add = () => {
      if (app.length > 0) {
        let ins = app[0]
        return ins
      }
      return 888
    }
    let aee = add()
    console.log(aee, 7747)
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', this.keyDown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keyDown)
  },
  methods: {
    close () {
      this.show = false
    },
    clearTimer () {
      console.log(888)
      clearTimeout(this.timer)
    },
    startTimer () {
      console.log(777)
      if (this.duration) {
        this.timer = setTimeout(() => {
          console.log(222222)
          this.show = false
          // if (!this.show) {

          // }
        }, this.duration)
      }
    },
    keyDown (e) {
      if (e.keyCode === 27) {
        // esc键退出
        this.show = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg {
    position: relative;
    display: inline-block;
    max-width: 300px;
    padding: 10px 55px 10px 20px;
    border-radius: 4px;
    text-align: left;
    word-break: break-all;
    background-color: #edf2fc;
  }
  .btn-close {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    padding: 5px;
    cursor: pointer;
    font-style: normal;
    font-size: 25px;
    color: #c3c6ce;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .message-warn {
    color: #e6a23c;
    background-color: #fdf6ec;
  }
  .message-success {
    color: #87cf63;
    background-color: #f0f9eb;
  }
  .message-error {
    color: #f78585;
    background-color: #fef0f0;
  }
</style>
