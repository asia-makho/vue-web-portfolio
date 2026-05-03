<script setup lang="ts">
import { useSiteState } from '@/composables/useSiteState';
import ProjectCard from '@/components/ProjectCard.vue'; 

const { texts } = useSiteState();
</script>

<template>
  <div class="home-wrapper">
    
    <header class="hero-header-v2">
      <div class="header-content-v2">
        <img src="/images/me.jpg" alt="Anastasiia" class="Me-logo-small">
        <div class="header-text-v2">
          <span class="portfolio-label">{{ texts.label }}</span>
          <h1 class="my-name">{{ texts.name }}</h1>
          <p class="hero-subtext">{{ texts.sub }}</p>
        </div>
      </div>
    </header>

    <section class="section">
      <h2 class="section-title">{{ texts.aboutTitle }}</h2>
      <div class="card">
        <div class="about-me-content">
          <img src="/images/Vorokhta.jpg" alt="Vorokhta" class="Vorokhta-img">
          <div class="about-me-text">
            <p>{{ texts.aboutText1 }}</p>
            <p>{{ texts.aboutText2 }}</p>
            <p>{{ texts.aboutText3 }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <h2 class="section-title">{{ texts.skillsTitle }}</h2>
      <div class="grid-two">
        <article class="card">
          <h3>{{ texts.techStackTitle }}</h3>
          <ul class="compact-list">
            <li v-for="skill in texts.techStackList" :key="skill">{{ skill }}</li>
          </ul>
        </article>
        <article class="card">
          <h3>{{ texts.softSkillsTitle }}</h3>
          <ul class="compact-list">
            <li v-for="skill in texts.softSkillsList" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="projects" class="section">
      <h2 class="section-title">{{ texts.projectsTitle }}</h2>
      <div class="grid-two">
        <ProjectCard
  :title="texts.proj1Title"
  :description="texts.proj1Desc"
  image="/vue-web-portfolio/images/matplotlib_heart.jpg" 
  tech="Python, Matplotlib, Turtle"
/>

<ProjectCard
  :title="texts.proj2Title"
  :description="texts.proj2Desc"
  image="/vue-web-portfolio/images/horoskope_tgbot.png"
  tech="Telegram Bot API, Python, MML"
/>
      </div>
    </section>

    <section id="details" class="section">
      <div class="grid-two">
        
        <div class="info-group">
          <h2 class="section-title-small">{{ texts.eduTitle }}</h2>
          <article class="card">
            <h3>{{ texts.uniName }}</h3>
            <p class="small-text"><strong><i>{{ texts.uniSpecialty }}</i></strong></p>
            <p class="small-text">{{ texts.uniPeriod }}</p>
          </article>
        </div>

        <div class="info-group">
          <h2 class="section-title-small">{{ texts.expTitle }}</h2>
          <article class="card">
            <h3>{{ texts.expRole }}</h3>
            <p class="small-text"><strong>{{ texts.expPeriod }}</strong></p>
            <ul class="compact-list">
              <li>{{ texts.expDesc1 }}</li>
              <li>{{ texts.expDesc2 }}</li>
            </ul>
          </article>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* ЗАГАЛЬНІ НАЛАШТУВАННЯ */
.home-wrapper {
  padding-bottom: 2rem; /* 32px */
}

img {
  max-width: 100%;
  height: auto;
}

.Vorokhta-img { 
  width: 100%; 
  max-width: 8.75rem; /* ~140px */
  height: 6rem; /* ~95px */
  object-fit: cover; 
  border-radius: 0.75rem; /* 12px */
  flex-shrink: 0; 
}

.section { 
  max-width: 1100px; /* max-width контейнера зазвичай залишають у px */
  margin: 0 auto;  
  padding: 1rem 1.25rem; /* 16px 20px */
}

.card { 
  background: #ffffff;
  padding: 1.125rem 1.5rem; /* 18px 24px */
  border-radius: 1.25rem; /* 20px */
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03); 
  border: 1px solid rgba(0,0,0,0.02);
  color: #334155; 
}

:global(.dark) .card { 
  background: #2d2d2d; 
  color: #ffffff;
  box-shadow: none;
}

:global(.dark) .about-me-text p {
  color: #ffffff !important; 
}

/* СІТКА */
.grid-two { 
  display: grid; 
  /* minmax(18.75rem...) - це ті самі 300px, переведені в rem */
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr)); 
  gap: 1.5rem; 
  align-items: start;
}

/* ЗАГОЛОВКИ */
.my-name { 
  font-size: 3.5rem; 
  margin: 0; 
  font-weight: 900; 
  color: #0f172a; 
  letter-spacing: -0.0625rem; /* -1px */
}

.section-title { 
  font-size: 1.6rem; 
  font-weight: 900;
  margin-bottom: 0.625rem; /* 10px */
  color: #0f172a;
}

.section-title-small {
  font-size: 1.3rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 0.5rem; /* 8px */
  padding-left: 0.3rem; /* 5px */
}

:global(.dark) .my-name, 
:global(.dark) .section-title, 
:global(.dark) .section-title-small,
:global(.dark) h3 { color: #f8fafc; }

/* HERO */
.hero-header-v2 { 
  display: flex; 
  justify-content: center; 
  margin: 1.5rem 0; /* 24px 0 */
}

.header-content-v2 { display: flex; align-items: center; gap: 1.25rem; /* 20px */ }
.Me-logo-small { width: 5.625rem; height: 5.625rem; /* 90px */ object-fit: cover; border-radius: 50%; }
.hero-subtext { font-size: 1rem; color: #475569; margin-top: 0.3rem; /* 5px */ }

/* ABOUT ME (ПРО МЕНЕ) */
.about-me-content { display: flex; gap: 1.25rem; align-items: center; } /* 20px */
.about-me-text p { font-size: 0.95rem; line-height: 1.5; margin-bottom: 0.375rem; /* 6px */ }

/* СПИСКИ */
.compact-list { 
  padding-left: 1.125rem; /* 18px */
  margin: 0.625rem 0 0 0; /* 10px 0 0 0 */
}
.compact-list li { margin-bottom: 0.25rem; /* 4px */ font-size: 0.9rem; }
.small-text { font-size: 0.85rem; color: #64748b; margin-bottom: 0.125rem; /* 2px */ }

/* =========================================
   BREAKPOINTS (Адаптивність)
   ========================================= */

/* Планшети */
@media (max-width: 1024px) {
  .my-name { font-size: 2.8rem; }
  .section-title { font-size: 1.4rem; }
  .section { padding: 1rem; }
}

/* Телефони */
@media (max-width: 768px) {
  .my-name { font-size: 2.2rem; }
  
  .header-content-v2 { 
    flex-direction: column; 
    text-align: center; 
  }
  
  .about-me-content { 
    flex-direction: column; 
    text-align: center; 
  }
  
  .Vorokhta-img { 
    max-width: 100%; 
    height: 12.5rem; /* 200px */
    margin-bottom: 1rem; 
  }
}
</style>