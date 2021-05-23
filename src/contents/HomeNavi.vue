<template>
  <nav :class="$style.stepNavi">
    <NuxtLink :class="$style.link" to="/">HOME</NuxtLink>
  </nav>
</template>

<script>
export default {
  data() {},
}
</script>

<style lang="postcss" scoped module>
.stepNavi {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 9999;
}

.link {
  display: block;
  color: #000099;
  text-decoration: underline;
}
</style>
