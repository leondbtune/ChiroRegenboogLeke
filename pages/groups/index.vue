<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <h1 class="text-3xl font-bold text-center mb-12">Groepen</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="movement in movements"
        :key="movement.name"
        :to="`groups/${movement.id}`"
        class="block"
      >
        <UCard class="transition-transform hover:scale-105">
          <template #header>
            <div class="flex justify-center p-4">
              <img
                :src="movement.logo"
                :alt="`${movement.name} logo`"
                class="w-36 h-36 object-contain"
              />
            </div>
          </template>

          <div class="text-center">
            <h2 class="text-xl font-semibold">{{ movement.name }}</h2>
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const movements = [
  {
    id: 1,
    name: "Sloebers",
    logo: "/sloebers.png",
  },
  {
    id: 2,
    name: "Speelclubs",
    logo: "/speelclubs.png",
  },
  {
    id: 3,
    name: "Rakwi's",
    logo: "/rakwis.png",
  },
  {
    id: 4,
    name: "Tito's",
    logo: "/titos.png",
  },
  {
    id: 5,
    name: "Keti's",
    logo: "/ketis.png",
  },
];
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
