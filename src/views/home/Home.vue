<template>
  <div id="home">
    <Hero/>
    <div class="container">
    <IntroductionSection/>
    <DescribeSection/>
    </div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import IntroductionSection from './components/IntroductionSection'
import DescribeSection from './components/DescribeSection.vue'
export default {
  components: {
    Hero,
    IntroductionSection,
    DescribeSection
  }
}
</script>