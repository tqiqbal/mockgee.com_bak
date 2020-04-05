<template>
  <div id="home">
    <Hero/>
    <IntroDescribe/>
    <DescribeOne/>
    <DescribeTwo/>
    <DescribeThree/>
    <IntroductionSection/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import IntroductionSection from './components/IntroductionSection'
import IntroDescribe from './components/IntroDescribe'
import DescribeOne from './components/DescribeOne.vue'
import DescribeTwo from './components/DescribeTwo.vue'
import DescribeThree from './components/DescribeThree.vue'
export default {
  components: {
    Hero,
    IntroductionSection,
    IntroDescribe,
    DescribeOne,
    DescribeTwo,
    DescribeThree
  }
}
</script>