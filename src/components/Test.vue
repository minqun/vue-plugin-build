<template>
  <div class="Test" >

    <img-build :func="()=>$refs.hello"></img-build>
  </div>
</template>

<script>
// import imgBuild from '../plugin/imgBuilded'
export default {
  name: 'Test',
  // components: {
  //   imgBuild
  // },
  created () {
    console.log(this.$imgBuild)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
</style>
