<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <h1 class="text-3xl font-bold text-center mb-12">Groepen</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="group in groups"
        :key="group.id"
        :to="`groups/${group.id}`"
        class="block"
      >
        <UCard class="transition-transform hover:scale-105">
          <template #header>
            <div class="flex justify-center p-4">
              <img
                :src="group.image"
                :alt="`${group.name} logo`"
                class="w-36 h-36 object-contain"
              />
            </div>
          </template>

          <div class="text-center">
            <h2 class="text-xl font-semibold">{{ group.name }}</h2>
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';
const runtimeConfig = useRuntimeConfig()
const supabase_key = runtimeConfig.supabaseKeyConst
const supabase = createClient('https://egsybqrixwlpmcfwbbke.supabase.co', supabase_key)
const groups = ref([])

async function getgroups() {
  const { data } = await supabase.from('Group').select()
  console.log(supabase_key)
  groups.value = data
}

onMounted(() => {
  getgroups()
})
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
