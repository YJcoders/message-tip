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
      show: false
    }
  },
  computed: {
    typeClass () {
      return this.type ? `message-${this.type}` : ''
    }
  },
  created () {

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
      clearTimeout(this.timer)
    },
    startTimer () {
      this.$nextTick(() => {
        if (this.duration) {
          this.timer = setTimeout(() => {
            this.show = false
          }, this.duration)
        }
      })
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
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000000;
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
  .fade-enter-active {
    animation: fadeIn .3s ease-in;
  }
  .fade-leave-active {
    animation: fadeIn .3s ease-out reverse;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-400px);
    }
    to {
      opacity: 1;
      transform: translateY(-100px)
    }
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
