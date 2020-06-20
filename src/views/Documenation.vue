<template>
  <section class="section documentation">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h1 class="is-size-3 has-text-primary">This is page under development</h1>
        </div>
        <div class="column">
          <AppImge :src="imgURL" width="500" height="500" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '../config'
import AppImge from '../components/images/AppImage'
export default {
  components: { AppImge },
  data() {
    return {
      imgURL: config.images.documentation
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation {
 min-height: 70vh;
}
</style>
