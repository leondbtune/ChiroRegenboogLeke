<template>
  <div>
    <!-- Fullscreen Background Image -->
    <div
      class="bg-cover bg-center bg-no-repeat h-[calc(100vh-80px)]"
      :style="{ backgroundImage: `url(${'/groepsfoto.jpg'})` }"
    >
      <div class="flex items-center justify-center h-full bg-black/40">
        <h1 class="text-white text-5xl font-bold">
          Welkom op de website van Chiro Leke
        </h1>
      </div>
    </div>

    <!-- Content Below -->
    <section class="p-8 text-center">
      <h2 class="text-3xl font-bold">Aankomende evenementen</h2>
      <div class="flex justify-around">
        <UCard v-for="event in events" :key="event.id" class="p-4 bg-white">
          <template #header>
            <h3 class="text-lg font-bold">{{ event.title }}</h3>
          </template>
          <p class="text-sm text-gray-600">
            {{ event.date }} | {{ event.location }}
          </p>
          <p class="mt-2">{{ event.description }}</p>
          <template #footer>
            <UButton color="primary" @click="register(event.id)"
              >Join Now</UButton
            >
          </template>
        </UCard>
      </div>
    </section>

    <section class="p-8 text-center">
        <h2 class="text-3xl font-bold">Jaarkalender</h2>

    </section>
  </div>
</template>

<script setup>
const events = [
  {
    id: 1,
    title: "Stoofvleesavond",
    date: "15 Maart, 2025",
    location: "Lecca",
    description: "Kom lekker stoofvlees of vegetarische lasagne eten op onze jaarlijkse stoofvleesavond.",
  },
  {
    id: 2,
    title: "Sloeber Speelclub Rakwi weekend",
    date: "17-19 April, 2025",
    location: "nog een verrassing",
    description: "we gaan naar jaarlijkse gewoonte op een spetterend weekend met de jongsten",
  },
  {
    id: 3,
    title: "Zomercafé",   
    date: "11-12 Juli, 2025",
    location: "Laagvlaktestraat",
    description: "Kom met ons de zomer vieren op ons jaarlijkse mini-festival.",
  },
];

const register = (eventId) => {
  alert(`You have registered for event ID: ${eventId}`);
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
