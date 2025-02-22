<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <h1 class="text-3xl font-bold text-center mb-12">Foto's</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="year in years"
        :key="year.id"
        :to="`photos/${year.id}`"
        class="block"
      >
        <UCard class="transition-transform hover:scale-105">
          <template #header>
            <div class="flex justify-center p-4">
              <img
                :src="year.image"
                :alt="`${year.name} logo`"
                class="w-36 h-36 object-contain"
              />
            </div>
          </template>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
const runtimeConfig = useRuntimeConfig();
const supabase_key = runtimeConfig.public.supabaseKeyConst;
const supabase = createClient(
  "https://egsybqrixwlpmcfwbbke.supabase.co",
  supabase_key
);
const years = ref([]);

async function getyears() {
  const { data } = await supabase.from("PhotoYear").select();
    console.log(data)
    years.value = data;
}

onMounted(() => {
  getyears();
});
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
