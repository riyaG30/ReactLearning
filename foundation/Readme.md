 
## 📘 Chapter 03 - Laying the Foundation

---

## 🛠️ Script Setup in `package.json`

- ✅ **Custom Scripts** to simplify terminal commands:
  - `"start"` → `npx parcel index.html`
  - `"build"` → `npx parcel build index.html`
- ✅ Run using:
  - `npm start` → launches dev server
  - `npm run build` → builds optimized production code

---

## ⚛️ React Elements

- ✅ A **React Element** is a plain object describing the UI.
- ✅ Example:
  ```jsx
  const heading = <h1>Hello JSX</h1>
  ```
- ✅ JSX is syntactic sugar for:
  ```js
  React.createElement("h1", { id: "h1" }, "Hello JSX")
  ```
- ✅ Flow:
  JSX → Babel transpiles to `React.createElement` → React creates Virtual DOM → Browser DOM

---

## 📦 Importing React DOM (v18+)

- ✅ Must import from:
  ```js
  import ReactDOM from "react-dom/client"
  ```
  (Not from just `"react-dom"` as done previously)
- ✅ Required to use `ReactDOM.createRoot(...)` for rendering.

---

## 💡 JSX (JavaScript XML)

- ✅ JSX is **not HTML**, it’s HTML-like syntax inside JS.
- ✅ Enhances readability.
- ✅ Requires Babel to convert JSX into JS using:
  - `@babel/preset-react` (for JSX)
  - `@babel/preset-env` (for modern JS features)

### ✅ JSX Rules:

- Use `className` instead of `class`
- Use `camelCase` for attributes
- Wrap multi-line JSX in parentheses `()`
- Wrap JS expressions inside `{}`

---

## 🔧 Babel

- ✅ Babel is a compiler for converting modern JS + JSX to browser-compatible code.
- ✅ Plugins:
  - `@babel/preset-env`
  - `@babel/preset-react`
  - `babel-plugin-transform-remove-console` (for removing console logs in prod)

- ✅ Example `.babelrc` config:
  ```json
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["transform-remove-console"]
  }
  ```

---

## ⚙️ React Components

- ✅ Two types:
  - **Functional Components (modern)**  
    ```js
    const Header = () => <h1>Hello</h1>
    ```
  - **Class Components (legacy)**

- ✅ Naming convention:
  - Component names **must start with a capital letter**
- ✅ Must return only **one parent JSX element**
- ✅ JSX inside components should always be **wrapped in one outer div**

---

## 🧩 Component Composition

- ✅ Components can be nested inside other components
- ✅ Helps create reusable & scalable UI

```jsx
const Title = () => <h1>Title</h1>;

const Header = () => (
  <div>
    <Title />
    <h2>Subtitle</h2>
  </div>
);
```

---

## 🔐 JSX Expressions & Security

- ✅ Use `{}` to embed JS expressions inside JSX
- ✅ React automatically escapes these to prevent XSS attacks
- ✅ Example:
  ```jsx
  const user = "John";
  <h1>Hello, {user}</h1>
  ```

---

## 🆚 Element vs Component

- `{Title}` → variable reference  
- `<Title />` → component instance  
- `<Title></Title>` → same, but supports children inside  

---

## 🧹 Tree Shaking

- ✅ Parcel + Babel can **remove unused code**
- ✅ Helps reduce bundle size in production

---

## 🔁 Rendering React to DOM

```jsx
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```

- Can also pass a normal element instead of component:
  ```js
  root.render(heading);
  ```

---

## 🛑 Best Practices

- ❗ Always provide `key` when rendering lists in React
- ❗ Avoid pushing `node_modules/` and `.parcel-cache/` to Git (add to `.gitignore`)
- ❗ Never manually modify `package-lock.json` or files in `node_modules/`
- ✅ Parcel builds go inside `dist/` folder (production-ready)

---

## 🔍 Extras

- ✅ `npx` is short for executing local `node_modules/.bin` binaries
- ✅ There are two `package-lock.json` files:
  - One in root (main dependencies)
  - One in `node_modules/` (for internal sub-dependencies)

---

## 💬 Interview Tip

> Why is your app fast?  
> 👉 Because of **React** combined with tools like **Parcel**, **Babel**, **Tree shaking**, **HMR**, and optimized builds!

---
