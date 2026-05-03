<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState'; 

// Отримуюю переклади
const { texts } = useSiteState();

defineProps<{
  title: string;
  description: string;
  image: string;
  tech: string;
}>();
</script>

<template>
  <article class="project-card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" class="project-img">
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      
      <p class="project-tech">
        <strong>{{ texts.projTech }}:</strong> {{ tech }}
      </p>
      
      <p class="project-description">{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: white; 
  border-radius: 1.25rem; /* 20px */
  overflow: hidden;
  box-shadow: 0 0.3rem 1rem rgba(0,0,0,0.05); /* 5px 15px */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* === ТЕМНА ТЕМА ДЛЯ ВСІЄЇ КАРТКИ === */
:global(.dark) .project-card {
  background: #2d2d2d; 
  box-shadow: none; 
}

.project-card:hover {
  transform: translateY(-0.3rem); /* -5px */
  box-shadow: 0 0.6rem 1.5rem rgba(50, 205, 50, 0.2); /* 10px 25px */
}

.project-img {
  width: 100%;
  height: 11.25rem; /* 180px */
  object-fit: cover;
}

.project-content {
  padding: 1.25rem; /* 20px */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* === КОЛЬОРИ ТЕКСТУ === */
.project-title {
  margin: 0 0 0.625rem 0; /* 10px */
  font-size: 1.2rem;
  color: #1a1a1a; 
}

:global(.dark) .project-title { 
  color: #ffffff; 
}

.project-tech {
  font-size: 0.85rem;
  color: #0088cc;
  margin-bottom: 0.625rem; /* 10px */
}

.project-tech strong {
  color: #0f172a; 
}
:global(.dark) .project-tech strong { 
  color: #e2e8f0;
}

.project-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  flex-grow: 1;
}
:global(.dark) .project-description { 
  color: #a0a0a0; 
}
</style>

<style>
/* Глобальний стиль для темної теми (без scoped) */
.dark .project-card {
  background-color: #2d2d2d !important;
}

.dark .project-card .project-title,
.dark .project-card .project-tech strong {
  color: #ffffff !important;
}

.dark .project-card .project-tech,
.dark .project-card .project-description {
  color: #e2e8f0 !important;
}
</style>