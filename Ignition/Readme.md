
## 📘 Chapter 02 - Igniting Our App

---



## 📦 NPM & Package Management

- ✅ **What is NPM?**  
  - Full form: **Node Package Manager**  
  - Works as a **package manager** (a dictionary of all packages)  
  - Helps manage dependencies for our JavaScript applications

- ✅ **npm init**  
  - Initializes a project  
  - Generates the **`package.json`** file  
  - Contains project details and list of dependencies

- ✅ **npm install <package>**  
  - Installs a package  
  - Adds it to `dependencies` or `devDependencies`  
  - `-D` or `--save-dev` → for **dev-only packages**

- ✅ **Installed Parcel**  
  - Using: `npm install -D parcel`  
  - A bundler used to compile and optimize the code  

---

## 📁 Important Files/Folders

- ✅ **package.json**  
  - Stores all dependencies with version ranges  
  - Acts like a blueprint for packages needed in the project  

- ✅ **package-lock.json**  
  - **Locks** the exact version of each package installed  
  - Ensures consistency across different systems  
  - Stores **hash** for security integrity  

- ✅ **node_modules**  
  - Acts like a **database** of installed packages  
  - Includes not just main packages but also **transitive dependencies**  
  - ❗ Should be ignored in Git using `.gitignore`  

---

## 🔧 Understanding Versions

- ✅ `^1.0.0` → Auto update **minor & patch versions**  
- ✅ `~1.0.0` → Auto update **patch version only**  
- ✅ Never manually touch `node_modules/` or `package-lock.json`

---

## ⚡ Igniting the App

- ✅ **npx parcel index.html**  
  - `npx` → execute a package without installing globally  
  - Parcel bundles the app and starts local dev server  

- ✅ Removed `App.js` as main, and used `index.html` as entry  

---

## 🔁 Installed React & ReactDOM

- ✅ `npm install react react-dom`  
  - Installed core libraries  
  - Removed CDNs and used **import/export**

- ✅ To enable ES6 modules in browser:  
  - Use `<script type="module" src="App.js">`  
  - Only **modules** support `import`/`export`, not plain scripts  

---

## 🚀 Parcel Superpowers

- ✅ HMR (Hot Module Replacement)  
- ✅ Tree Shaking  
- ✅ File Watching  
- ✅ Image Optimization  
- ✅ Minification  
- ✅ Auto HTTPS for local dev  
- ✅ Production build via: `npx parcel build index.html`

- ✅ Creates **`dist/`** folder with optimized files for production  
  - Contains **minified**, production-ready JS/CSS/HTML  
  - ✅ Put this `dist/` on your server  

---

## 🌍 Browser Compatibility

- ✅ **Browserslist** in `package.json`  
  - Define the browser versions your app should support  
  - Example: country-wise or version-wise targeting  
  - Bundler uses it to transpile code accordingly  

---

## 💡 Interview-Ready Insights

- ✅ Why is your app fast?  
  > "Not just because of React, but because of bundlers like **Parcel** and other supporting tools that optimize code, enable HMR, minify assets, manage caching, and more."

---
