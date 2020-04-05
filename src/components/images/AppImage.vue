<template>
  <img :src="src" :alt="alt" :width="width" :height="height">
</template>


<script>
export default {
  props: {
    src: {
      type: String,
      default: "http://hello"
    },
    alt: {
      type: String,
      default: "Default name"
    },
    width: {
      type: [Number, String],
      default:300
    },
    height: {
      type: [Number, String],
      default: 150
    }
  }
}
</script>