<template>
  <div id="page" :class="$style.page" ref="page" class="bg-gray-0">
    <div class="contents a">a</div>
    <div class="contents b">b</div>
    <div class="contents c">c</div>
    <div class="contents d">d</div>
    <div class="contents e">e</div>
  </div>
</template>

<script>
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  layout: 'leaf',

  mounted() {
    gsap.defaults({ ease: Power2.easeInOut, duration: 4 })
    console.log('ScrollTrigger', ScrollTrigger)
    console.log('mounted', this.$refs.page.offsetHeight, this.$style.page)
    //
    const tl = gsap.timeline({ paused: true })
    tl.from('.a', { xPercent: 100 })
      .from('.b', { xPercent: -100 })
      .from('.c', { yPercent: -100 })
      .from('.d', { yPercent: 100 })
      .from('.e', { autoAlpha: 0 })
    //
    ScrollTrigger.create({
      animation: tl,
      pinSpacing: false,
      // trigger: '#page',
      trigger: this.$refs.page,
      start: 'top top',
      end: `bottom bottom`,
      scrub: true,
      pin: true,
      // anticipatePin: 스크롤할때 미리 예측하고 그림으로써 더 부드럽게 보임. 다만 최신의 브라우저에서는 불필요.
      anticipatePin: 1,
    })
  },
}
</script>
<style lang="postcss" scoped>
.contents {
  height: 100vh;
  color: #fff;
  font-size: 100px;
  position: absolute;
  width: 100%;
  top: 0;
  @apply grid place-content-center;
}
.a {
  z-index: 0;
  background-color: #f66;
}
.b {
  z-index: 1;
  background-color: #6f6;
}
.c {
  z-index: 2;
  background-color: #66f;
}
.d {
  z-index: 3;
  background-color: #f6f;
}
.e {
  z-index: 4;
  background-color: #666;
}
</style>

<style lang="postcss" module scoped>
.page {
  height: 7000px;
  width: 100%;
}
</style>
