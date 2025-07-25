import React from "react";
import ReactDOM from "react-dom/client"

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */
// Create Header element like navbar using createElement
/*
 * 
<div class="header">
<h1>Title</h1>
<ul>
<li>Home</li>
<li>About Us</li>
</ul>
 * 
 * 
 */
// const heading = ce(
//   "div",
//   {
//     className: "header",
//     key: "header",
//   },
//   [ce(
//     "h1",
//     {
//       key: "Title",
//     },
//   "Title"), ce(
//     "ul",
//     {
//       key: "ul",
//     },
//   [ce(
//     "li",
//     {
//       key: "Home",
//     },
//   "Home"),ce(
//     "li",
//     {
//       key: "About Us",
//     },
//   "About Us")])]
// )

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)

// here this head id a react element (object )
const head = (
    <h1 id = "h1" key = "h1">
        This is heading of JSX
    </h1>
)
// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component

// TItle component is a functional componendt 
const Title = () => {
    return (
        <div>
            <h1 id = "title" key = "title" >Namaste Riya Ji</h1>
        </div>
    )
}

const HeaderComponent  = () =>{
    return (
        <div>
            {head}
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log("this is javscript, inside curley brackert we can write any JS we want inside a JSX")}
      <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
      
        </div>
    )
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react elemen t inside root 
root.render(<HeaderComponent/>);


