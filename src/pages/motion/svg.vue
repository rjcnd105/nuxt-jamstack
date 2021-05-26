<template>
  <div :class="$style.page" class="bg-gray-0">
    <!--    viewBox: x, y, width, height-->
    w100 h100, vb 0 0 100 100
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle
        r="10"
        cx="25"
        cy="25"
        stroke="#f00"
        fill="none"
        stroke-width="3"
      ></circle>
    </svg>
    w100 h100, vb 0 0 50 50
    <svg width="100" height="100" viewBox="0 0 50 50">
      <circle
        r="10"
        cx="25"
        cy="25"
        stroke="#f00"
        fill="none"
        stroke-width="3"
      ></circle>
    </svg>
    둘 다 같은 r10 cx25 cy25인 원임. viewbox 25 25 50 50
    <svg width="100" height="100" viewBox="25 25 50 50">
      <circle
        r="10"
        cx="25"
        cy="25"
        stroke="#f00"
        fill="none"
        stroke-width="3"
      ></circle>
    </svg>
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
  @apply mx-auto w-full xl:max-w-1200 px-10;
}
</style>
