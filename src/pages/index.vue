<template>
  <div class="container">
    <div>
      <h3>motion</h3>
      <NuxtLink :class="$style.link" :to="{ name: 'motion-scroll' }"
        >MOTION - SCROLL</NuxtLink
      >
      <NuxtLink :class="$style.link" :to="{ name: 'motion-pageScroll' }"
        >MOTION - PAGE SCROLL
      </NuxtLink>
      <NuxtLink :class="$style.link" :to="{ name: 'motion-snapScroll' }"
        >MOTION - SNAP PAGE SCROLL
      </NuxtLink>
      <NuxtLink :class="$style.link" :to="{ name: 'motion-svg' }"
        >MOTION - SVG
      </NuxtLink>

      <!--      <h3 :class="$style.title">showcase</h3>-->
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default {
  data() {
    return {}
  },
}
</script>

<style lang="postcss" module scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.link {
  display: block;
  color: #000099;
  text-decoration: underline;
}

.title {
  font-size: 24px;
  @apply bg-gray-50;
}
</style>
