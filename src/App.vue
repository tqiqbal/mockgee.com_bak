<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/home/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
