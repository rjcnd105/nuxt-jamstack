<template>
  <div :class="$style.page"  class="bg-gray-0">
    <svg id='svg1' width="100" height="100" viewBox="0 0 100 100">
      <circle
        r="10"
        cx="25"
        cy="25"
        stroke="#f00"
        fill="none"
        stroke-width="3"
      ></circle>
    </svg>
    <svg id='svg2' width="100" height="100" viewBox="0 0 100 100">
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
import { gsap, Power2 } from 'gsap'

export default {
  layout: 'leaf',

  mounted() {
    const contents = gsap.utils.toArray('.contents')
    const t1 = gsap.timeline({repeat: -1, repeatDelay: .5})
    const svg1 = document.querySelectorAll('#svg1 circle')
    const svg2 = document.querySelectorAll('#svg2 circle')

    gsap.to(svg1, {
      // snap지점을 정확히 알고있지 않다면 ease를 none으로 주어라!
      ease: Power2.easeOut,
      duration: 0.8,
      yoyo: true,
      attr: {
        r:0
      },
      repeat: -1
    })
    t1.to(svg2, {
      // snap지점을 정확히 알고있지 않다면 ease를 none으로 주어라!
      ease: Power2.easeOut,
      duration: 0.8,
      xPercent: "+=100", // 원본을 기준으로 100%이기 때문에
    }).to({ease: Power2.easeOut,
        duration: 0.8,
        xPercent: "+=100",
      })
  },
}
</script>

<style lang="postcss" module scoped>
.page {
  height: 5000px;
  @apply mx-auto w-full xl:max-w-1200 px-10;
}
</style>

