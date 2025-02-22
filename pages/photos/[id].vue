<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <h1 class="text-3xl font-bold text-center mb-12">Albums</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="event in events"
        :key="event.id"
        :to="event.link"
        class="block"
        target="_blank"
      >
        <UCard class="transition-transform hover:scale-105">
          <template #header>
            <div class="flex justify-center p-4">
              <img
                :src="event.image"
                :alt="`${event.name} logo`"
                class="w-36 h-36 object-contain"
              />
            </div>
          </template>
          <h2 class="text-center">{{ event.name }}</h2>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

import { createClient } from "@supabase/supabase-js";
const runtimeConfig = useRuntimeConfig();
const supabase_key = runtimeConfig.public.supabaseKeyConst;
const supabase = createClient(
  "https://egsybqrixwlpmcfwbbke.supabase.co",
  supabase_key
);
const events = ref([]);

async function getevents() {
  const { data } = await supabase
    .from("PhotoEvent")
    .select()
    .eq("photo_year_id", route.params.id);
  console.log(data);
  events.value = data;
}

onMounted(() => {
  getevents();
});
</script>
