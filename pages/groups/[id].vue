<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <h1 class="text-3xl font-bold text-center mb-12">{{ group.name }}</h1>
    <UContainer class="flex flex-col items-center justify-center">
      <img :src="group.image" :alt="logo" class="w-36 h-36 object-contain" />
      <h2 class="text-center mt-4">{{ group.description }}</h2>
    </UContainer>

    <!-- Leaders Section -->
    <div class="mt-12">
      <h2 v-if="leaders" class="text-2xl font-semibold text-center mb-6">Leaders</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard v-for="leader in leaders" :key="leader.id" class="p-6 flex flex-col items-center text-center">
          <!-- Custom Circular Image (Centered) -->
          <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 mx-auto mb-4">
            <img :src="leader.image" :alt="leader.name" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-lg font-medium">{{ leader.name }}</h3>
          <p class="text-gray-600">{{ leader.description }}</p>
        </UCard>
      </div>
    </div>
  </div>
</template>


<script setup>
const route = useRoute();

import { createClient } from '@supabase/supabase-js';
const runtimeConfig = useRuntimeConfig()
const supabase_key = runtimeConfig.public.supabaseKeyConst
const supabase = createClient('https://egsybqrixwlpmcfwbbke.supabase.co', supabase_key)
const group = ref([])
const leaders = ref([])

async function getgroups() {
  const { data } = await supabase.from('Group').select().eq('id', route.params.id).single()
  group.value = data
}

async function getleaders() {
  const { data } = await supabase.from('Leader').select().eq('group_id', route.params.id)
  leaders.value = data
}

onMounted(() => {
  getgroups(),
  getleaders()
})
</script>
