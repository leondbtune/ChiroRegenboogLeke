<template>
    <div>
        <!-- Fullscreen Background Image -->
        <div 
            class="bg-cover bg-center bg-no-repeat h-[calc(100vh-80px)]" 
            :style="{backgroundImage: `url(${'/groepsfoto.jpg'})`}"
        >
            <div class="flex items-center justify-center h-full bg-black/40">
                <h1 class="text-white text-5xl font-bold">Welkom op de website van Chiro Leke</h1>
            </div>
        </div>

        <!-- Content Below -->
        <section class="p-8 bg-white">
            <h2 class="text-3xl font-bold">About Us</h2>
            <p class="mt-4 text-lg">This is some content that appears when you scroll.</p>
        </section>
        <section class="p-8 bg-white">
            <h2 class="text-3xl font-bold">About Us</h2>
            <p class="mt-4 text-lg">This is some content that appears when you scroll.</p>
        </section>
        <section class="p-8 bg-white">
            <h2 class="text-3xl font-bold">About Us</h2>
            <p class="mt-4 text-lg">This is some content that appears when you scroll.</p>
        </section>
        <section class="p-8 bg-white">
            <h2 class="text-3xl font-bold">About Us</h2>
            <p class="mt-4 text-lg">This is some content that appears when you scroll.</p>
        </section>
        <section class="p-8 bg-white">
            <h2 class="text-3xl font-bold">About Us</h2>
            <p class="mt-4 text-lg">This is some content that appears when you scroll.</p>
        </section>
        <section class="p-8 bg-white">
            <h2 class="text-3xl font-bold">About Us</h2>
            <p class="mt-4 text-lg">This is some content that appears when you scroll.</p>
        </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  </style>
  