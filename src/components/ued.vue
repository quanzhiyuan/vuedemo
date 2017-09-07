<template>
  <div class="hello" v-if="show">
    <h1>{{ msg }}</h1>
    <h1>{{ msg1 }}</h1>
    <input v-model="name" type="text" />{{name}}
    <button @click="message">i am a button</button>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div><router-link to="/ued">go to ued</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Ued',
      name: '用户体验部',
      show: true
    }
  },
  methods: {
    message: function () {
      alert(this.msg)
    }
  },
  computed: {
    msg1: function () {
      return this.msg + '1'
    }
  },
  beforeCreate: function () {
    console.log('this is beforeCreated!')
  },
  created: function () {
    console.log('this is created!')
  },
  beforeMount: function () {
    console.log('this is beforeMounted!')
  },
  mounted: function () {
    console.log('this is mounted!')
  },
  beforeUpdate: function () {
    console.log('this is beforeUpdated')
  },
  updated: function () {
    console.log('this is updated!')
  },
  beforeDestory: function () {
    console.log('this is beforeDestory')
  },
  destoryed: function () {
    console.log('this is destoryed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
button {
  width: 200px;
  height: 40px;
  color: red;
}
</style>
