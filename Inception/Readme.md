# 👋 Namaste React Course by Akshay Saini  
## 📘 Chapter 01 - Inception

---

## 🛠️ Coding Setup
- Installed and configured tools:
  - ✅ VS Code
  - ✅ Chrome Browser
  - ✅ Chrome Extensions (like React Developer Tools)

---



## 🚀 Things I Learned

### 1. **Running React using HTML and CDN (No NPM or Vite)**
- Created a basic HTML file and added CDN links to `react` and `react-dom`.
- Did not use build tools like NPM, Vite, or Webpack.
- Useful for quick testing and understanding core React concepts.

---

### 2. **React.createElement()**
- Used to create React elements manually without JSX.
- Syntax:
  ```js
  React.createElement(type, props, children)
  ```

#### 📌 Example:
```js
const heading = React.createElement("h1", { id: "title" }, "Namaste React 🚀");
```

- `type`: The HTML tag (e.g., `"h1"`)
- `props`: An object containing tag attributes (`id`, `className`, etc.)
- `children`: A string or another element, or an array for multiple children

---

### 3. **Nested Elements using Array**
- Multiple children (sibling elements) can be created using arrays.

#### 📌 Example:
```js
const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
]);
```

---

### 4. **ReactDOM.createRoot()**
- Used to initialize the root rendering environment.

#### 📌 Example:
```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
```

- This creates the virtual root where React mounts your components.

---

### 5. **Important Notes**
- React replaces all content inside the `div#root` using `root.render()`.
- Static content in `div#root` like `“Not Rendered”` will be replaced.
- Every page refresh fetches the CDN files again (observe in DevTools).
- `React.createElement()` is how JSX gets compiled under the hood.

---

## 🧠 Summary

- 💡 This chapter focuses on **manual React setup** without JSX or build tools.
- 💡 Helps understand the **fundamentals of how React works** behind the scenes.
- 💡 It's important to master `createElement` and `render` before jumping into JSX and component-based architecture.

---

✅ **Successfully rendered React without any bundler or compiler.**
💪 Great foundation for upcoming JSX-based development.
