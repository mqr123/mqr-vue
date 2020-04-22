<template>
  <div id="app">
    <MyForm></MyForm>
    <MyTree></MyTree>
  </div>
</template>

<script>
import MyForm from './components/form'
import MyTree from './components/tree'

export default {
  name: 'App',
  components: {
    MyForm,
    MyTree
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
