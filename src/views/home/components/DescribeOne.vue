<template>
  <section class="section">
    <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
              <div class="title">
              Shorten Time to Production
            </div>
            <div class="subtitle">
              Work more efficiently with Postman's API mock servers. Postman mocks support split-stack development so front-end and back-end developers can work in parallel and view responses without spinning up the back end.
            </div>
          </div>
          <div class="column image">
              <AppImage src="https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mock_test.png" width="300" height="150"/>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import AppImage from '../../../components/images/AppImage'
export default {
  components: {
    AppImage
  }
  
}
</script>

<style lang="scss" scoped>
// .image {
//   text-align: center;
// }
</style>