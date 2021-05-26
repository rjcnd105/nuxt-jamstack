<template>
  <div :class="$style.page" class="bg-gray-0">
    <svg version="1.1"></svg>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'

export default {
  layout: 'leaf',
  mounted() {},
}
</script>
<style lang="postcss" scoped></style>

<style lang="postcss" module scoped>
.page {
  height: 20000px;
  padding-top: 1000px;
  @apply mx-auto w-full xl:max-w-1200 px-10;
}
</style>
