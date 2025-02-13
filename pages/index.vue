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
  </div>
</template>

<script setup>
const events = [
  {
    id: 1,
    title: "Outdoor Adventure Camp",
    date: "March 15, 2025",
    location: "Evergreen Forest",
    description: "A weekend full of outdoor activities, hiking, and teamwork!",
  },
  {
    id: 2,
    title: "Leadership Workshop",
    date: "April 5, 2025",
    location: "City Youth Center",
    description: "Develop your leadership skills with expert mentors.",
  },
  {
    id: 3,
    title: "Spring Festival",
    date: "April 20, 2025",
    location: "Main Square",
    description: "Celebrate the season with music, games, and fun activities.",
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
