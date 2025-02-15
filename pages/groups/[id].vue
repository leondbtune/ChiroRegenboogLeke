<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <h1 class="text-3xl font-bold text-center mb-12">{{ getPageText() }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();

const getPageText = () => {
  const names = {
    1: "sloebers",
    2: "speelclubs",
    3: "rakwi's",
    4: "tito's",
    5: "speelclubs",
  };

  return `Hier komt de pagina van de ${names[route.params.id] || "onbekend"}`;
};
</script>
