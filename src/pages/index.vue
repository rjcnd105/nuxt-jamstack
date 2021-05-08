<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-jamstack</h1>
      <NuxtLink to="/about"></NuxtLink>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <div style="color: white">{{ result }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

const doubleSay = (str) => str + ', ' + str
const capitalize = (str) => str[0].toUpperCase() + str.substring(1)
const exclaim = (str) => str + '!'

// Easily use pipe syntax with Babel Transform plugins
// Check out the `nuxt.config.js` to see how I included the plugin
// Info about that proposal on
// https://github.com/tc39/proposal-pipeline-operator/#introduction

const result = 'it works with pipes' |> doubleSay |> capitalize |> exclaim

export default {
  data() {
    return {
      result,
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
