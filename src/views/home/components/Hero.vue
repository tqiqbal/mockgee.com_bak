<template>
  <section class="hero is-medium is-primary">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column hero-text">
          <h1 class="title has-text-light is-bold is-size-1 has-text-weight-bold">
           Mock APIs with Mockgee
          </h1>
          <h2 class="subtitle has-text-dark is-size-3 has-text-weight-bold">
           Create Mock APIs in seconds
          </h2>
          <b-button type="is-light" @click="openApp">Try Now</b-button>
        </div>
        <div class="column">
          <div class="image" style="width: 400px; heigth: 200px;text-align: right;">
            <AppImage src="https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/dev_productivity_transparent.png" 
             alt="Hero"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<script>
import AppImage from '../../../components/images/AppImage'
export default {
  data() {
    return {
      appURL: 'http://cloud.mockgee.com'
    }
  },
  components: {
    AppImage
  },
  methods: {
    openApp() {
      window.open(this.appURL)
    }
  }
  
}
</script>

<style lang="scss" scoped>
.image {
  text-align: right;
}
.hero.is-medium .hero-body {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.hero-text {
  padding-top: 5rem;
}
</style>