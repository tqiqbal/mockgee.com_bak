<template>
  <section class="section">
    <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
              <div class="title">
              Support 100% Techincal Capbility
            </div>
            <div class="subtitle">
              A mock should support the same transport protocols, schemas, etc as the actual API, and be. The mock API should be accessible exactly like the original service and not require any special tooling or libraries.
            </div>
          </div>
          <div class="column image">
              <AppImage :src="imgURL" width="300" height="150"/>
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
      imgURL: config.images.describeThree
    }
  }
  
}
</script>

<style lang="scss" scoped>
// .image {
//   text-align: center;
// }
</style>