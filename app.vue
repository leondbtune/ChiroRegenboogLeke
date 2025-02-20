<template>
  <div id="app">
    <NuxtLoadingIndicator />
    <NuxtLayout />  <!-- This renders the actual page content -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  background-color: white;
  color: black
}
</style>
