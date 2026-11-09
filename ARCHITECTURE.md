# Architecture Overview

This Vue portfolio app is a client-side Vite application with a routed page shell, reusable UI components, localized content, and static public assets.

```mermaid
flowchart LR
    User[User / Browser] -->|visits site| PagesHost[GitHub Pages]
    PagesHost -->|serves built app| Vite[Vite Build / Static App]

    Vite --> Main[src/main.js]
    Main --> App[App.vue]
    App --> Shell[App Shell]
    Shell --> Router[Vue Router\nsrc/router/index.js]
    Router --> Home[Home.vue]
    Router --> Contacts[Contacts.vue]
    Router --> Dashboard[Dashboard.vue]
    Router --> Todo[TodoList.vue]

    App --> Navbar[NavBar.vue]
    App --> Footer[Footer.vue]
    App --> Header[Header.vue]

    Home --> Cards[ProjectCard.vue]
    Contacts --> Cards
    Dashboard --> Cards
    Todo --> Cards

    App --> State[useSiteState.ts\nTheme + locale state]
    State --> Data[src/data/translations.ts]
    State --> ThemeToggle[Dark/light theme toggle]

    Vite --> Public[public/\nimages, favicon, .nojekyll]
    Vite --> Tests[Playwright tests\n/tests]

    Home --> Content[Localized UI copy]
    Contacts --> Content
    Dashboard --> Content
    Todo --> Content
    Content --> Data
```

## Key architectural layers

- Entry layer: `src/main.js` boots the Vue app and installs the router.
- Shell layer: `src/App.vue` renders the global layout and hosts `router-view`.
- Routing layer: `src/router/index.js` maps routes to the main pages.
- Page layer: `src/pages/*.vue` contains page-specific sections for the portfolio experience.
- Component layer: `src/components/*.vue` contains reusable UI elements such as navigation, footer, and project cards.
- State and content layer: `src/composables/useSiteState.ts` manages theme and locale state, while `src/data/translations.ts` provides localized text.
- Static assets layer: `public/` holds favicon, images, and deployment-related assets.
- Delivery layer: Vite builds the client app and GitHub Pages serves the deployed site.
