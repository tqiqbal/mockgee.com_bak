<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
     Header,
     Footer
  },
  created() {
    document.title = 'Mockgee - Create Mock API in seconds'
  }
}
</script>

<style lang="scss" src="./style/app.scss">
</style>

