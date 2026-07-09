# React ⚛️

A curated collection of React projects built while learning modern React development. Each project focuses on a different aspect of the React ecosystem—from state management and hooks to accessibility, controlled forms, and API integration.

Every application is an independent Vite project with its own dependencies, making it easy to explore, run, and study individually.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-success)

---

## Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [React Concepts Covered](#react-concepts-covered)
- [Technology Stack](#technology-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

# Overview

This repository documents my journey learning React through practical, project-based development.

Instead of isolated examples, each project is built around a complete application that explores specific React concepts and real-world development patterns.

Current areas of focus include:

- React Hooks
- Component Composition
- State Management
- Accessibility
- Controlled Forms
- API Integration
- Modern JavaScript (ES6+)
- Clean Project Structure

Every project is completely independent and can be installed and run separately.

---

# Projects

## 🎲 Tenzies

> A dice game where the goal is to roll until every die shows the same value.

### Highlights

- `useState`
- `useEffect`
- `useRef`
- Derived State
- Array State Updates
- Accessibility (`aria-live`)
- Keyboard Focus Management

### Packages

- nanoid
- react-confetti

---

## 💻 Assembly Endgame

> A programming-themed Hangman game where incorrect guesses eliminate programming languages instead of drawing a traditional hangman.

### Highlights

- Derived State
- Conditional Rendering
- Dynamic Styling
- Keyboard Interaction
- Accessibility
- Game State Management

### Packages

- clsx
- react-confetti

---

## 👨‍🍳 Chef Claude

> A recipe assistant that accepts user ingredients and generates recipe suggestions.

### Highlights

- Controlled Forms
- FormData API
- Component Composition
- Conditional Rendering
- Dynamic List Rendering

### Planned Improvements

- AI-powered recipe generation
- Backend integration

---

## 😂 Meme Generator

> A meme creation application that fetches meme templates from the Imgflip API and allows users to generate custom memes.

### Highlights

- API Fetching
- useEffect
- Controlled Components
- Random Data Selection
- State Management

---

# React Concepts Covered

| Category | Concepts |
|-----------|----------|
| Components | Functional Components, Component Composition |
| State | useState, Derived State |
| Effects | useEffect |
| References | useRef |
| Rendering | Conditional Rendering, Lists & Keys |
| Forms | Controlled Components, FormData |
| Styling | CSS |
| APIs | Fetch API |
| Accessibility | aria-live, aria-disabled, Keyboard Navigation |

---

# Technology Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Library |
| Vite | Development Environment |
| JavaScript (ES6+) | Programming Language |
| HTML5 | Markup |
| CSS3 | Styling |
| ESLint | Code Quality |

---

# Repository Structure

```
React/
│
├── capstone_project_1/
│   └── tenzies/
│
├── capstone_project_2/
│   └── Hangman_Game/
│
├── claude_chef/
│
├── meme_generator/
│
├── LICENSE
└── README.md
```

Each project contains its own:

- package.json
- node_modules
- source code
- assets
- Vite configuration

---

# Getting Started

## Prerequisites

- Node.js 18+
- npm

Clone the repository.

```bash
git clone https://github.com/AlephContinuum/React.git
```

Move into the repository.

```bash
cd React
```

Navigate to any project.

```bash
cd capstone_project_1/tenzies
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Repeat the same steps for any other project.

---

# Available Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Starts the development server |
| npm run build | Creates a production build |
| npm run preview | Previews the production build |
| npm run lint | Runs ESLint (where available) |

---

# Roadmap

- [ ] Deploy every project with live demo links
- [ ] Connect Chef Claude to an AI backend
- [ ] Add TypeScript versions
- [ ] Add unit tests with Vitest
- [ ] Improve project documentation
- [ ] Add React Router projects
- [ ] Learn Context API
- [ ] Continue expanding the collection

---

# Contributing

Although this repository primarily documents my learning journey, improvements, suggestions, and pull requests are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push the branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

# Author

**Sparsh Samrat**

- GitHub: https://github.com/AlephContinuum
- LinkedIn: https://www.linkedin.com/in/sparsh-samrat-104549309/

---

If you find this repository useful, consider giving it a ⭐.
