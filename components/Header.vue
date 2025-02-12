<template>
    <header class="header bg-gray-100 p-2">
        <nav class="flex text-white items-center justify-around">
            <!-- Logo on the Left -->
            <div>
                <img src="/assets/logo.jpg" alt="Profile" class="w-20 h-20 rounded-full" />
            </div>

            <!-- Centered Navigation Links -->
            <ul class="flex space-x-8 text-lg font-medium">
                <li v-for="link in links" :key="link.to">
                    <NuxtLink 
                        :to="link.to" 
                        :class="{'text-gray-50 font-bold border-b-2 border-white': isActive(link.to), 'text-white hover:border-b-2': !isActive(link.to)}"
                        class="pb-1"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>

            <div class="flex space-x-4">
                <a href="https://www.facebook.com/chiro.regenboog.leke" target="_blank" aria-label="Facebook">
                    <i class="fab text-2xl fa-facebook w-8  text-white hover:text-blue-600"></i>
                </a>
                <a href="https://www.instagram.com/chiroleke/" target="_blank" aria-label="Instagram">
                    <i class="fab text-2xl fa-instagram w-8 text-white hover:text-pink-500"></i>
                </a>
            </div>
        </nav>
    </header>
</template>


<script setup>
import { useRoute } from 'vue-router';

// Define navigation links
const links = [
    { to: "/", label: "Home" },
    { to: "/groups", label: "Groepen" },
    { to: "/photos", label: "Fotos" },
    { to: "/blog", label: "Blog" }
];

const route = useRoute();

// Function to check if link is active
const isActive = (path) => route.path === path;
</script>

<style scoped>
.header {
    background-color: #E1143C;
    padding: 10px;
}


.nav-links li {
    font-size: 18px;
}

.nav-links a {
    text-decoration: none;
    color: white;
}

.nav-links a:hover {
    text-decoration: underline;
}
</style>