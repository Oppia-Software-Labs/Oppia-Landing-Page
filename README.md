<div align="center">
  <img src="public/oppia-logos/imagotypes/Oppia-Imagotype-Full-Color.svg" alt="Oppia Logo" width="200" />
</div>

# Oppia Landing Page

Modern, scalable landing page built with Next.js, TypeScript, and Tailwind CSS, following Clean Code principles and modular architecture.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React 19** - UI library

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and animations
│
├── components/             # React components
│   ├── icons/              # Icon/logo components
│   │   ├── oppia/         # Oppia logos
│   │   └── partners/      # Partner logos
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx     # Generic button
│   │   ├── MenuOverlay.tsx
│   │   └── navbar/        # Navbar module (feature-based)
│   │       ├── Navbar.tsx
│   │       ├── NavbarTopBar.tsx
│   │       ├── MenuButton.tsx
│   │       ├── LanguageButton.tsx
│   │       ├── DiscoverLink.tsx
│   │       └── MenuContent.tsx
│   └── visuals/           # Decorative components (SVGs)
│       ├── LeftWave.tsx
│       └── RightWave.tsx
│
├── modules/                # Application modules (feature-based)
│   ├── hero/              # Hero module
│   │   └── Hero.tsx
│   ├── partners/          # Partners module
│   │   └── Partners.tsx
│   └── projects/          # Projects module (future)
│
├── constants/              # Centralized constants
│   ├── colors.ts          # Application colors
│   └── animations.ts      # Animation durations
│
├── hooks/                  # Custom React hooks
│   ├── useMenuAnimation.ts
│   └── useLocale.ts
│
├── i18n/                   # Internationalization
│   ├── en.json            # English translations
│   ├── es.json            # Spanish translations
│   └── i18n.ts            # i18n utilities
│
├── store/                  # Global state (Zustand)
│   └── store.ts
│
├── types/                  # TypeScript type definitions
│   └── icons.ts
│
└── utils/                  # Utilities
    └── cn.ts              # Tailwind class merging utility

public/                      # Static assets
├── oppia-logos/           # Oppia brand assets
│   ├── imagotypes/        # Full logo with text
│   │   ├── Oppia-Imagotype-Black.svg
│   │   ├── Oppia-Imagotype-Full-Color.svg
│   │   └── Oppia-Imagotype-White.svg
│   └── isotypes/          # Icon only
│       ├── isotype-black.svg
│       ├── isotype-full-color.svg
│       └── isotype-white.svg
├── partners/              # Partner logos
│   ├── catalitec.svg
│   └── stellar.svg
└── visuals/               # Decorative assets
    ├── left-wave.svg
    └── right-wave.svg
```

## 🏗️ Architectural Principles

### 1. **Separation of Concerns**

- **`components/ui/`**: Generic, reusable UI components
- **`components/icons/`**: Icon/logo components
- **`components/visuals/`**: Decorative elements (SVGs, animations)
- **`modules/`**: Business modules organized by feature

### 2. **Feature-Based Organization**

Each module (navbar, hero, partners, etc.) groups all related components in a dedicated folder. This enables:
- Quick discovery of related code
- Scalability without technical debt
- Maintainable code organization

### 3. **Centralized Constants**

All magic values (colors, durations, etc.) are centralized in `constants/`:
- **`colors.ts`**: Application colors
- **`animations.ts`**: Animation durations and delays

### 4. **Custom Hooks**

Complex logic extracted into reusable hooks:
- **`useMenuAnimation`**: Handles menu animation logic
- **`useLocale`**: Handles locale logic with localStorage

### 5. **No Inline Styles**

All styles are handled with:
- Tailwind CSS classes
- CSS custom properties (variables)
- Custom CSS classes in `globals.css`

### 6. **Strict TypeScript**

- Centralized types in `types/`
- Well-defined interfaces
- Type safety throughout the application

## 📝 Naming Conventions

### Components
- **PascalCase**: `Navbar.tsx`, `Hero.tsx`, `MenuButton.tsx`
- **Descriptive**: Names that clearly explain their purpose

### Files and Folders
- **kebab-case** for folders: `navbar/`, `hero/`, `partners/`
- **PascalCase** for components: `Navbar.tsx`, `Button.tsx`

### Hooks
- **use** prefix: `useMenuAnimation.ts`, `useLocale.ts`

### Constants
- **UPPER_SNAKE_CASE**: `COLORS`, `ANIMATION_DURATIONS`

## 🎨 Styling Architecture

### Tailwind CSS
- Utility-first approach
- Custom properties in `globals.css` for reusable values
- CSS variables for colors: `--background-dark`, `--white-opacity-4`

### Animations
- Keyframes defined in `globals.css`
- Durations centralized in `constants/animations.ts`
- Reusable classes: `.navbar-expand`, `.menu-slide-down`, etc.

## 🌐 Internationalization (i18n)

### Structure
- Translations in JSON: `en.json`, `es.json`
- `useTranslations(locale)` hook to access translations
- Locale persisted in `localStorage`

## 🗄️ Global State (Zustand)

The global store (`store/store.ts`) manages:
- **Locale**: Current application language
- **Menu state**: Menu open/closed state

## ➕ Adding a New Module

1. **Create folder in `modules/`**:
   ```
   src/modules/new-module/
   └── NewModule.tsx
   ```

2. **If it needs specific components**, create folder in `components/ui/`:
   ```
   src/components/ui/new-module/
   ├── Component1.tsx
   └── Component2.tsx
   ```

3. **Add translations** in `i18n/en.json` and `i18n/es.json`:
   ```json
   {
     "newModule": {
       "title": "Title",
       "description": "Description"
     }
   }
   ```

4. **If it needs constants**, add to `constants/`:
   ```ts
   export const NEW_MODULE = {
     // constants
   } as const;
   ```

5. **If it needs hooks**, create in `hooks/`:
   ```
   src/hooks/useNewModule.ts
   ```

## 🚀 Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linter
npm run lint
```

## 📦 Key Dependencies

- **next**: React framework
- **react** / **react-dom**: UI library
- **typescript**: Type safety
- **tailwindcss**: CSS framework
- **zustand**: State management
- **clsx** / **tailwind-merge**: CSS class utilities

## 🎯 Best Practices

1. **Small, focused components**: Each component has a single responsibility
2. **No magic numbers**: Everything in constants
3. **No inline styles**: Use Tailwind or CSS classes
4. **Strict TypeScript**: Well-defined types
5. **Explicit imports**: No `index.ts` for re-exports
6. **No unnecessary comments**: Self-documenting code
7. **Feature-based organization**: Group related code together




