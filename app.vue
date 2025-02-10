<template>
  <div>
    <!-- Header -->
    <UHeader>
      <template #left>
        <ULink to="/" class="font-bold text-2xl">YouthMove</ULink>
      </template>
      <template #right>
        <UHorizontalNavigation>
          <ULink to="#about">About</ULink>
          <ULink to="#events">Events</ULink>
          <ULink to="#get-involved">Get Involved</ULink>
        </UHorizontalNavigation>
      </template>
    </UHeader>

    <!-- Hero Section -->
    <section class="bg-gray-100 py-20">
      <UContainer>
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Join the Movement</h1>
          <p class="text-xl mb-8">Every Two Sundays, We Make a Difference</p>
          <UButton
            color="primary"
            size="xl"
            to="#get-involved"
          >
            Get Involved
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16">
      <UContainer>
        <h2 class="text-3xl font-bold mb-8 text-center">About YouthMove</h2>
        <UCard class="max-w-3xl mx-auto">
          <p class="text-lg">
            YouthMove is a dynamic youth movement dedicated to empowering young people and making a positive impact in our community. We organize engaging events every two Sundays, focusing on personal growth, community service, and social connection.
          </p>
        </UCard>
      </UContainer>
    </section>

    <!-- Events Section -->
    <section id="events" class="bg-gray-100 py-16">
      <UContainer>
        <h2 class="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <UCard v-for="event in events" :key="event.date">
            <template #header>
              <h3 class="text-xl font-semibold">{{ event.title }}</h3>
            </template>
            <p>{{ event.description }}</p>
            <template #footer>
              <p class="font-medium">Date: {{ event.date }}</p>
            </template>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Get Involved Section -->
    <section id="get-involved" class="py-16">
      <UContainer>
        <h2 class="text-3xl font-bold mb-8 text-center">Get Involved</h2>
        <UCard class="max-w-lg mx-auto">
          <UForm :schema="formSchema" @submit="onFormSubmit">
            <UFormGroup label="Name" name="name">
              <UInput v-model="form.name" />
            </UFormGroup>
            <UFormGroup label="Email" name="email">
              <UInput v-model="form.email" type="email" />
            </UFormGroup>
            <UFormGroup label="Message" name="message">
              <UTextarea v-model="form.message" />
            </UFormGroup>
            <UButton type="submit" color="primary" class="w-full">
              Join Us
            </UButton>
          </UForm>
        </UCard>
      </UContainer>
    </section>

    <!-- Footer -->
    <UFooter class="bg-gray-800 text-white py-8">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h3 class="text-xl font-bold">YouthMove</h3>
            <p>Making a difference, two Sundays at a time.</p>
          </div>
          <div>
            <UHorizontalNavigation>
              <ULink to="#" external target="_blank">
                <UIcon name="i-mdi-facebook" class="w-6 h-6" />
              </ULink>
              <ULink to="#" external target="_blank">
                <UIcon name="i-mdi-instagram" class="w-6 h-6" />
              </ULink>
              <ULink to="#" external target="_blank">
                <UIcon name="i-mdi-twitter" class="w-6 h-6" />
              </ULink>
            </UHorizontalNavigation>
          </div>
        </div>
      </UContainer>
    </UFooter>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const events = [
  {
    title: 'Community Clean-up',
    description: 'Join us for a day of cleaning up our local parks and streets.',
    date: 'Sunday, June 4, 2023'
  },
  {
    title: 'Youth Leadership Workshop',
    description: 'Develop your leadership skills with our expert-led workshop.',
    date: 'Sunday, June 18, 2023'
  }
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required')
})

const onFormSubmit = (data) => {
  // Handle form submission here
  console.log('Form submitted:', data)
  // You would typically send this data to your backend or API
}
</script>

<style>
/* Add any global styles here if needed */
</style>