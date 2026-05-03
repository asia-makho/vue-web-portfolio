<script setup lang="ts">
import { ref } from 'vue';
import { useSiteState } from '@/composables/useSiteState';

// Стан для перемикання меню на мобільних
const isMenuOpen = ref(false);

// Змінні та функції з твоєї старої шапки
const { locale, setLocale, toggleTheme, theme, texts } = useSiteState();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="navbar">
    <div class="logo">Моє Портфоліо</div> 
    
    <!-- Кнопка-гамбургер (видно тільки на мобільних) -->
    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>

    <!-- Головний контейнер для меню та налаштувань -->
    <div class="nav-container" :class="{ 'open': isMenuOpen }">
      
      <!-- Посилання на сторінки -->
      <nav class="nav-group">
        <router-link to="/" class="nav-btn" @click="toggleMenu">{{ texts.navHome }}</router-link>
        <router-link to="/contacts" class="nav-btn" @click="toggleMenu">{{ texts.navContacts }}</router-link>
        <router-link to="/dashboard" class="nav-btn" @click="toggleMenu">{{ texts.navWeather }}</router-link>
        <router-link to="/todo" class="nav-btn" @click="toggleMenu">{{ texts.navTodo }}</router-link>
      </nav>

      <!-- Налаштування (мова та тема) -->
      <div class="settings-group">
        <div class="lang-box">
          <button 
            @click="setLocale('uk'); toggleMenu()" 
            :class="['settings-btn', { active: locale === 'uk' }]"
          >UA</button>
          <button 
            @click="setLocale('en'); toggleMenu()" 
            :class="['settings-btn', { active: locale === 'en' }]"
          >EN</button>
        </div>
        
        <button @click="toggleTheme(); toggleMenu()" class="settings-btn theme-toggle">
          {{ theme === 'light' ? 'Тема 🌙' : 'Тема ☀️' }}
        </button>
      </div>

    </div>
  </header>
</template>

<style scoped>
/* БАЗОВИЙ КОНТЕЙНЕР ШАПКИ */
.navbar {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 1rem 5%; 
  background: rgba(255, 255, 255, 0.7); 
  backdrop-filter: blur(15px);  
  position: sticky; 
  top: 0; 
  z-index: 1000; 
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.1); 
}

:global(.dark) .navbar {
  background: rgba(45, 45, 45, 0.8); 
  color: white; 
}

.logo {
  font-size: 1.5rem; 
  font-weight: bold; 
  color: #0f172a;
}
:global(.dark) .logo { color: #ffffff; }

/* КОНТЕЙНЕР ДЛЯ МЕНЮ ТА НАЛАШТУВАНЬ */
.nav-container {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

/* ГРУПИ КНОПОК */
.nav-group, .settings-group {
  display: flex; 
  gap: 0.3rem; 
  background: rgba(0, 0, 0, 0.03); 
  padding: 0.3rem; 
  border-radius: 0.75rem; 
  align-items: center; 
}

.lang-box {
  display: flex; 
  gap: 0.5rem; 
}

/* КНОПКИ (твій фірмовий стиль) */
.nav-btn, .settings-btn {
  text-decoration: none; 
  padding: 0.5rem 1rem; 
  border: 1px solid rgb(85, 8, 226); 
  border-radius: 0.625rem; 
  font-size: 0.85rem; 
  font-weight: 640; 
  color: yellowgreen; 
  background: whitesmoke; 
  transition: all 0.3s ease; 
  cursor: pointer; 
  text-transform: uppercase; 
}

.nav-btn:hover:not(.router-link-active), 
.settings-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.6); 
  color: #0f172a;  
}

/* АКТИВНІ КНОПКИ */
.router-link-active, .settings-btn.active {
  background: white !important; 
  border-color: rgba(59, 130, 246, 0.2) !important; 
  background-image: linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%) !important; 
  -webkit-background-clip: text !important; 
  -webkit-text-fill-color: transparent !important; 
  background-clip: text !important; 
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.05); 
}

/* Темна тема для груп */
:global(.dark) .nav-group, :global(.dark) .settings-group { background: rgba(255, 255, 255, 0.05); } 
:global(.dark) .router-link-active, :global(.dark) .settings-btn.active { background: #2d2d2d !important; } 

/* ГАМБУРГЕР */
.menu-toggle {
  display: none; 
  font-size: 1.8rem; 
  background: none; 
  border: none; 
  cursor: pointer; 
  color: inherit; 
}

/* АДАПТИВНІСТЬ ДЛЯ МОБІЛЬНИХ (Точка зламу 850px, щоб кнопки влазили) */
@media (max-width: 850px) {
  .menu-toggle {
    display: block; 
  }

  .nav-container {
    display: none; 
    flex-direction: column; 
    position: absolute; 
    top: 100%; 
    left: 0; 
    width: 100%; 
    background-color: #ffffff; 
    box-shadow: 0 0.3rem 0.625rem rgba(0,0,0,0.1); 
    padding: 1.25rem 0; 
    z-index: 10; 
    gap: 1rem;
  }

  :global(.dark) .nav-container { background-color: #2d2d2d; }

  .nav-container.open {
    display: flex; 
  }

  .nav-group, .settings-group {
    flex-direction: column; 
    width: 90%;
  }
}
</style>