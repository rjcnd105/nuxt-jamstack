<template>
  <div :class="$style.page" class="bg-gray-0">
    <div class="box a" ref="box"></div>
    scrub
    <div class="box b" ref="box"></div>
    restart
    <div class="box c" ref="box"></div>
    <div class="box d" ref="box"></div>
    <!--    class 모듈 방식 여러개 사용시-->
    <div :class="[$style.myBox, $style.red]" ref="box"></div>
    <div :class="$style.myBox" ref="box"></div>
    <div :class="$style.myBox" ref="box"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  mounted() {
    console.log('mounted', this.$refs)
    gsap.to('.a', {
      scrollTrigger: '.a',
      x: 400,
      rotation: 360,
      duration: 3,
    })
    // scrub
    gsap.to('.b', {
      // scrub이 true면 스크롤 값이 progress로 작동함.
      scrollTrigger: { trigger: '.b', scrub: true },
      x: 400,
      rotation: 360,
      // scrub 모드일땐 duration이 상관 없음.
      duration: 0.1,
    })
    // toggleActions
    gsap.to('.c', {
      // onEnter, onLeave, onEnterBack, and onLeaveBack,
      // "play", "pause", "resume", "reset", "restart", "complete", "reverse", "none".
      scrollTrigger: { trigger: '.c', toggleActions: 'restart none none none' },
      x: 400,
      rotation: 360,
      duration: 3,
    })
  },
}
</script>
<style lang="postcss" scoped>
.box {
  width: 100px;
  height: 100px;
  margin-bottom: 100px;
  background-color: #000000;
}
.a {
  background-color: #faa;
}
.b {
  background-color: #aaffaa;
}
.c {
  background-color: #aaaaff;
}
.d {
  background-color: #faf;
}
</style>

<style lang="postcss" module scoped>
.page {
  height: 20000px;
  padding-top: 1000px;
  @apply mx-auto w-full xl:max-w-1200 px-10;
}
.myBox {
  width: 100px;
  height: 100px;
  margin-bottom: 100px;
  border-radius: 8px;
  @apply shadow-ne-2;
}
.red {
  background-color: #f00;
}
</style>
