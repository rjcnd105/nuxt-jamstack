<template>
  <div :class="$style.page" class="bg-gray-0">
    <div class="box a" ref="box">a</div>
    scrub
    <div class="box b" ref="box">b</div>
    restart
    <div class="box c" ref="box">c</div>
    start, end + debug:marker
    <div class="box d" ref="box">d</div>
    <div class="box e" ref="box">e</div>
    <div class="box-wrap">
      <div class="box f">f</div>
      <div class="box ghost1">ghost1</div>
      <div class="box ghost2">ghost2</div>
    </div>
    <!--    class 모듈 방식 여러개 사용시-->
    <div :class="[$style.myBox, $style.red]"></div>
    <div :class="[$style.myBox, $style.green]"></div>
    <div :class="[$style.myBox, $style.blue]"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  layout: 'leaf',
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
      // scrub이 true면 스크롤 값이 완전히 progress로 작동함.
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
      scrollTrigger: {
        trigger: '.c',
        toggleActions: 'restart pause reverse pause',
      },
      x: 400,
      rotation: 360,
      duration: 3,
    })

    // Start, end
    gsap.to('.d', {
      // onEnter, onLeave, onEnterBack, and onLeaveBack,
      // "play", "pause", "resume", "reset", "restart", "complete", "reverse", "none".
      scrollTrigger: {
        trigger: '.d',
        // start, end: element start, scroll start
        // props: top, center, bottom, +=,-=[n], [css]
        start: '50px 70%',
        end: 'top +=100',
        // end: () => "+=" + document.querySelector(".d").offsetWidth,
        // markers: true,
        toggleActions: 'restart pause reverse pause',
      },
      x: 400,
      rotation: 360,
      duration: 3,
    })
    // start trigger, end trigger,
    gsap.to('.e', {
      scrollTrigger: {
        trigger: '.c',
        start: '50px 70%',
        endTrigger: '.e',
        end: 'top +=100',
        markers: true,
        toggleActions: 'restart pause reverse pause',
      },
      x: 400,
      rotation: 360,
      duration: 3,
    })
    // scrub이 숫자면 따라잡는데 딜레이가 필요함
    gsap.to('.f', {
      scrollTrigger: {
        trigger: '.f',
        start: '0 70%',
        end: '0 10%',
        scrub: 1,
        toggleActions: 'restart pause reverse pause',
      },
      x: 400,
      rotation: 360,
      duration: 3,
    })
    gsap.to('.ghost1', {
      scrollTrigger: {
        trigger: '.ghost1',
        start: '0 70%',
        end: '0 10%',
        scrub: 1.7,
        toggleActions: 'restart pause reverse pause',
      },
      x: 400,
      rotation: 360,
      duration: 3,
    })
    gsap.to('.ghost2', {
      scrollTrigger: {
        trigger: '.ghost2',
        start: '0 70%',
        end: '0 10%',
        scrub: 2.5,
        toggleActions: 'restart pause reverse pause',
      },
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
  @apply grid place-content-center;
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
.e {
  background-color: #aff;
}
.f {
  position: relative;
  background-color: #ffa;
  z-index: 2;
}
.box-wrap {
  position: relative;
}
.ghost1 {
  background-color: #999;
  position: absolute;
  z-index: 1;
  top: 0;
}
.ghost2 {
  background-color: #666;
  position: absolute;
  z-index: 0;
  top: 0;
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
.green {
  background-color: #0f0;
}
.blue {
  background-color: #00f;
}
</style>
