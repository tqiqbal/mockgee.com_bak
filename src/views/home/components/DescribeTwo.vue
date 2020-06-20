<template>
  <section class="section">
    <div class="container">
        <div class="columns reverse-column-order is-vcentered">
          <div class="column image">
              <AppImage :src="imgURL" width="300" height="150"/>
          </div>
          <div class="column">
              <div class="title">
              Increase Developers Productivity
            </div>
            <div class="subtitle">
              With Mockgee's API mock server overall effectiveness of a development team and their ability to produce results can be significantly incrreased. Developers can take the advantage of mocking during development that integrates with other system components via APIs.
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import AppImage from '../../../components/images/AppImage'
import config from '../../../config'
export default {
  components: {
    AppImage
  },
  data() {
    return {
      imgURL: config.images.describeTwo
    }
  }
  
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  .reverse-column-order {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>