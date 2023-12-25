# React + Vite
## [Live Demo](https://reactjs-tailwind-secure-password-generator.vercel.app/)

# Password Generator

A simple Password Generator built with React and Vite. Allows users to create secure passwords with customizable settings.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [About the Hooks](#about-the-hooks)



## Features

- Generate random passwords based on user-defined settings.
- Adjustable password length.
- Toggle options for including uppercase letters, numbers, and symbols.
- Copy generated passwords to the clipboard.

### Technologies Used

- [React](https://react.dev/) - JavaScript library for building user interfaces.

- [Vite](https://vitejs.dev/) - A fast build tool that focuses on frontend development.

- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AshokWebWorks/reactjs-tailwind-secure-password-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd directory_name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit http://localhost:5173 for React With Vite.

### Usage
1. Adjust the "Password Length" using the range slider.
2. Toggle the checkboxes to include or exclude uppercase letters, numbers, and symbols.
3. The generated password will update in real-time based on your settings.
4. Click on the copy icon to copy the generated password to the clipboard.
5. A confirmation message will appear briefly at the bottom when the password is copied successfully.

### About the Hooks

- `useCallback`

The `useCallback` hook is employed to memoize the `generatePassword` function, ensuring that it is not recreated on every render. This optimization is particularly useful when passing functions as props to child components or when dealing with dependencies in the `useEffect` hook.

- `useEffect`

The `useEffect` hook is used to generate a password when settings such as password length, uppercase allowance, or symbol allowance change. This ensures that the password is updated in real-time based on the user's preferences.

- `useRef`

The `useRef` hook is utilized to create a reference to the password input field (`passwordRef`). This reference is later used to select and copy the password to the clipboard.

- `useState`

The `useState` hook is employed to manage the state of various variables, such as `passLength`, `numbersAllowed`, `uppercaseAllowed`, `SymbolsAllowed`, `password`, and `message`. These state variables drive the dynamic behavior of the password generator app.

<hr/>

### This version includes information about using Vite as the build tool and updates the development server command accordingly (`npm run dev`). Make sure to adjust the information based on your project structure and requirements.
