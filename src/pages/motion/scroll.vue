<template>
  <div :class="$style.page" class="bg-gray-0">
    <div ref="box" class="box a">a</div>
    scrub
    <div ref="box" class="box b">b</div>
    restart
    <div ref="box" class="box c">c</div>
    start, end + debug:marker
    <div ref="box" class="box d">d</div>
    <div ref="box" class="box e">e</div>
    <div ref="box" class="box ee">
      Event Box<br />
      (콘솔확인해)
    </div>
    <div class="box-wrap">
      <div class="box f">f</div>
      <div class="box ghost1">ghost1</div>
      <div class="box ghost2">ghost2</div>
    </div>

    <strong>Each Pin (No Spacing)</strong>
    <div class="no-spacing" :class="[$style.myBox, $style.red]"></div>
    <div class="no-spacing" :class="[$style.myBox, $style.green]"></div>
    <div class="no-spacing" :class="[$style.myBox, $style.blue]"></div>

    <div style="height: 500px"></div>
    <strong>Each Pin (spacing)</strong>
    <div :class="[$style.myBox, $style.red]"></div>
    <div :class="[$style.myBox, $style.green]"></div>
    <div :class="[$style.myBox, $style.blue]"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  layout: 'leaf',
  mounted() {
    ScrollTrigger.defaults({})
    console.log(ScrollTrigger)
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
        id: 'e',
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
    // start trigger, end trigger,
    gsap.to('.ee', {
      scrollTrigger: {
        trigger: '.ee',
        start: 'top center',
        end: 'top 30%',
        toggleClass: 'active',
        id: 'ee',
        onEnter(self) {
          console.log('onEnter', self)
        },
        onToggle(self) {
          console.log('onToggle', self.isActive)
        },
        onLeave(self) {
          console.log('onLeave', self)
        },
        onEnterBack(self) {
          console.log('onEnterBack', self)
        },
        onLeaveBack(self) {
          console.log('onLeaveBack', self)
        },
        onUpdate(self) {
          // console.log('onUpdate', self)
        },
        markers: true,
        toggleActions: 'restart pause reverse pause',
      },
      x: 400,
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

    console.log('mounted', gsap.utils.toArray(`.${this.$style.myBox}`))
    // 각각에 개별적으로 애니메이션을 주기 위할때
    gsap.utils.toArray('.no-spacing').forEach((box, i) => {
      ScrollTrigger.create({
        trigger: box,
        start: 'center 50%',
        pin: true,
        pinSpacing: false,
      })
    })
    gsap.utils
      .toArray(`.${this.$style.myBox}:not(.no-spacing)`)
      .forEach((box, i) => {
        ScrollTrigger.create({
          trigger: box,
          start: 'center 50%',
          pin: true,
          pinSpacing: true,
        })
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
.ee {
  color: #ffffff;
}

.active {
  background-color: #eeeeee;
  color: #f00;
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
  margin-left: 50px;
}

.blue {
  background-color: #00f;
  margin-left: 100px;
}
</style>
