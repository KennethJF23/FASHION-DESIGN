# Fashion 3D CustomWear Client

This is the client-side application for the Fashion 3D CustomWear project, built with React, Vite, and Three.js. It allows users to customize 3D shirts with their own colors, logos, and AI-generated designs.

## Features
- **3D Shirt Customization:** Real-time 3D shirt preview and editing using React Three Fiber.
- **AI Design Integration:** Generate shirt designs using AI prompts.
- **User Authentication:** Login and registration pages for user management.
- **Dashboard:** User dashboard for managing designs.
- **Modern UI:** Built with Tailwind CSS and responsive design.

## Key Metrics
- **Performance:** Fast load times with Vite and code splitting.
- **Interactivity:** Real-time updates and smooth transitions.
- **AI Usage:** Track number of AI-generated designs (requires backend integration).
- **User Engagement:** Number of customizations and downloads.
- **Accessibility:** Keyboard navigation and color contrast support.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
2. Start the development server:
	```bash
	npm run dev
	# or
	yarn dev
	```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Project Structure
- `src/` - Main source code
  - `components/` - Reusable UI components
  - `canvas/` - 3D canvas and models
  - `pages/` - Application pages (Home, Login, Register, Dashboard, Customizer)
  - `config/` - App configuration and helpers
  - `assets/` - Images and static assets
- `public/` - Static files

## Technologies Used
- React
- Vite
- Three.js & React Three Fiber
- Tailwind CSS
- Valtio (state management)
- Framer Motion (animations)
- Sass

## License
MIT
