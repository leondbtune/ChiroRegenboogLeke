<template>
  <div>
    <!-- Fullscreen Background Image -->
    <div
      class="bg-cover bg-center bg-no-repeat h-[calc(100vh-80px)]"
      :style="{ backgroundImage: `url(${'https://egsybqrixwlpmcfwbbke.supabase.co/storage/v1/object/public/chiroleke//groepsfoto.jpg'})` }"
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard v-for="event in events" :key="event.id" class="p-4 bg-grey">
          <template #header>
            <h3 class="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">{{ event.title }}</h3>
            <p class="text-sm text-gray-600">
              {{ event.date }} | {{ event.location }}
            </p>
          </template>
          <img :src="event.picture" alt="Event Image" class="h-60 w-full object-cover">
          <template #footer>
            <p class="mt-2">{{ event.description }}</p>
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
    picture: '/stoofvleesavond.png',
    description:
      "Kom lekker stoofvlees of vegetarische lasagne eten op onze jaarlijkse stoofvleesavond.",
  },
  {
    id: 2,
    title: "Sloeber Speelclub Rakwi weekend",
    date: "17-19 April, 2025",
    location: "verrassing",
    picture: '/weekend.png',
    description:
      "we gaan naar jaarlijkse gewoonte op een spetterend weekend met de jongsten",
  },
  {
    id: 3,
    title: "Zomercafé",
    date: "11-12 Juli, 2025",
    location: "Laagvlaktestraat",
    picture: '/zomercafe.png', 
    description: "Kom met ons de zomer vieren op ons jaarlijkse mini-festival.",
  },
  {
    id: 4,
    title: "Chirokamp",
    date: "11-19 Augustus, 2025",
    location: "verrassing",
    picture: '/logo.jpg', 
    description: "Ons jaarlijkse groot kamp",
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
