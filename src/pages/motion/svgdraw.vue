<template>
  <div id="page" :class="$style.page" ref="page" class="bg-gray-0">
    <div class="x-container">
      <div class="contents a">a</div>
      <div class="contents b">b</div>
      <div class="contents c">c</div>
      <div class="contents d">d</div>
      <div class="contents e">e</div>
    </div>
  </div>
</template>

<script>
import { gsap, Power2 } from 'gsap'

export default {
  layout: 'leaf',

  mounted() {
    const contents = gsap.utils.toArray('.contents')
    const contents2 = document.querySelectorAll('.contents')

    gsap.to(contents2, {
      xPercent: -100 * (contents2.length - 1),
      // snap지점을 정확히 알고있지 않다면 ease를 none으로 주어라!
      ease: 'none',
      duration: 0.2,
      scrollTrigger: {
        trigger: '.x-container',
        pin: true,
        pinSpacing: false,
        scrub: 1,
        snap: {
          snapTo: 1 / (contents2.length - 1),
          duration: { min: 0.05, max: 0.1 },
          ease: Power2.easeOut,
        },
        end: () => '+=' + document.querySelector('.x-container').offsetWidth,
      },
    })
  },
}
</script>
<style lang="postcss" scoped>
.x-container {
  display: flex;
  width: 500vw;
  height: 100vh;
}
.contents {
  flex: 1;
  color: #fff;
  font-size: 100px;
  top: 0;
  @apply grid place-content-center;
}

.a {
  background-color: #f66;
}
.b {
  background-color: #6f6;
}
.c {
  background-color: #66f;
}
.d {
  background-color: #f6f;
}
.e {
  background-color: #666;
}
</style>

