<template>
  <div id="app">
    <NuxtLayout />  <!-- This renders the actual page content -->'
    <Analytics />
  </div>
</template>

<script>
export default {
  name: 'App'
};
import { Analytics } from '@vercel/analytics/next';
</script>

<style>
body {
  background-color: white;
  color: black
}
</style>
