# Horse Racing Game 🏇

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd horse-racing-game
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Locally preview the production build

## Project Structure

```
horse-racing-game/
├── src/                    # Source files
│   ├── assets/            # Static assets
│   ├── components/        # Reusable Vue components
│   ├── containers/        # Container components
│   ├── i18n/             # Internationalization files
│   ├── modules/          # Application modules
│   ├── store/            # Vuex store files
│   ├── utils/            # Utility functions
│   ├── views/            # Page components
│   ├── App.vue           # Root component
│   ├── main.js           # Application entry point
│   └── style.css         # Global styles
├── public/               # Public static assets
└── vite.config.js        # Vite configuration
```

## Technologies

- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Vuex](https://vuex.vuejs.org/) - State Management Pattern + Library
- [Vue-i18n](https://vue-i18n.intlify.dev/) - Internationalization Plugin
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework

## Development

The project uses Vue 3's `<script setup>` syntax for components. For more information, check out the [script setup documentation](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup).
