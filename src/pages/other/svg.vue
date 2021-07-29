<template>
  <div :class="$style.page" class="bg-gray-0">
    <strong>viewBox: x, y, width, height</strong><br/>

    svg: w100 h100, vb 0 0 100 100<br/>
    circle: cx25 cy25 r10
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
    svg: w100 h100, vb 0 0 50 50(0,0 을 기준으로 2배 확대한 것과 같은 효과)<br/>
    circle: cx25 cy25 r10
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
    svg: w100 h100, vb 25 25 50 50(x25, y25를 기준으로 2배 확대)<br/>
    circle: cx25 cy25 r10
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
    stroke를 안쪽으로만 할 수는 없다고 한다...<br>
    svg: w100 h100 <br/>
    circle: cx50 cy50 r50
    <svg width="100" height="100" >
      <circle
        r="50"
        cx="50"
        cy="50"
        stroke="#f00"
        fill="none"
        stroke-width="3"
      ></circle>
    </svg>

    path: M으로 시작점을 찍고 H(x축), V(y축)으로 이동
    <svg width="100" height="100" >
      <path d='M10 10 H30 V30 H50 V50 H70 V70 H90 V90' stroke-width='3' stroke='#f00' fill='none'></path>
    </svg>
    L로 x,y를 한번에 이동시킬 수 있다.
    마지막에 Z를 쓰면 처음 시작점(M)으로 마지막 선을 잇는다.
    <svg width="100" height="100" >
      <path d='M10,10 L25,50 L50,25 L75,50 L50,75 Z' stroke-width='3' stroke='#f00' fill='none'></path>
    </svg>


    <strong>베지어 곡선 방법1</strong><br>
    C x1 y1, x2 y2, x y<br/>
    C로 x1 y2, x2 y2는 곡선을 나타내기 위한 것이고. x, y는 이을 점이다.<br/>
    처음 x1, y1는 시작점이 적용될 커브 기준 점.<br/>
    두번째 x2, y2는 끝점이 적용될 커브 기준 점.<br/>
    <svg width="100" height="100" >
      <path d="M10 30 C 40 50, 60 50, 90 30" stroke-width='3' stroke='#f00' fill="transparent"/>
      <path d="M10 70 C 40 50, 60 50, 90 70" stroke-width='3' stroke='#f00' fill="transparent" stroke-dasharray='4'/>
    </svg>

    <strong>베지어 곡선 방법2</strong><br>
    S x2 y2, x y (S나 C뒤에 오는 경우 시작 점을 생략한다. dx2 dy2, dx dy). 시작으로 쓰거나, C뒤에로 많이 씀<br/>
    즉 C에서 x1 y1가 사라지고 S(이전 점의 x2, y2의 reverse. 생략됨) x2 y2, x y 처럼 된다고 보면 된다. <br/>
    2번째 선을 보면 S를 똑같이 줬음에도 두번째 커브가 더 강하다. 두번째 커브의 이전 점의 곡선이 먹어서 중간 지점으로 했을때 더 왼쪽에 쏠리게 먹은 것.<br/>
    x2 y2에 가상의 점을 하나 찍었다 생각하고 이전 점과 끝점(x, y)가 해당 x2, y2방향으로 균일하게 휜다.
    <svg width="100" height="100" >
      <path d="M10 20 S50 50, 90 20" stroke-width='3' stroke='#f00' fill="transparent"/>
      <path d="M10 50 S30 30, 50 50 S70 70, 90 50" stroke-width='3' stroke='#f00' fill="transparent"/>
      <path d="M10 70 C20 60, 40 60, 50 70 S80 80, 90 70" stroke-width='3' stroke='#f00' fill="transparent"/>
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
<style lang="postcss" scoped>
svg {
  margin-bottom: 16px;
  outline: 1px solid;
}
</style>

<style lang="postcss" module scoped>
.page {
  height: 5000px;
  @apply mx-auto w-full xl:max-w-1200 px-10;
}
</style>
