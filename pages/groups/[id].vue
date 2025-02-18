<template>
  <div class="min-h-screen p-8 bg-gray-50">
    <h1 class="text-3xl font-bold text-center mb-12">{{ group.name }}</h1>
    <img
                :src="group.image"
                :alt="`logo`"
                class="w-36 h-36 object-contain flex items-c justify-center"
              />
              <h2 class="text-center">{{ group.description }}</h2>
  </div>
</template>

<script setup>
const route = useRoute();

import { createClient } from '@supabase/supabase-js';
const runtimeConfig = useRuntimeConfig()
const supabase_key = runtimeConfig.public.supabaseKeyConst
const supabase = createClient('https://egsybqrixwlpmcfwbbke.supabase.co', supabase_key)
const group = ref([])

async function getgroups() {
  const { data } = await supabase.from('Group').select().eq('id', route.params.id).single()
  group.value = data
}

onMounted(() => {
  getgroups()
})
</script>
