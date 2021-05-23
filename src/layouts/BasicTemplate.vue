<template>
  <div :class="$style.container">
    <NuxtChild />
  </div>
</template>
<style lang="postcss" module scoped>
/* Sample `apply` at-rules with Tailwind CSS
*/
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  @apply min-h-screen flex justify-center mx-auto;
}
</style>
