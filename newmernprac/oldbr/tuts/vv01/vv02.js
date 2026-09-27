// 18th Dec, 2023
// Learned React Basic Folder Structure, adding basics CSS and looping array, objects and showing in FE

// Starting with the yesterday's context

// library vs framework

// understanding react folder structure

// html kind of syntax =====> JS XML ===> JSX

// page.js
// One Mini Task:
// In page.js, create a input field username and password
// and one submit button "Login"

// page.module.css -> If react installed with tailwind, this page won't be there
                    // css for page.js
// global.css -> global css

// class is the reserved keyword in React, so we use className instead

// Learning global css and page.module.css for the specific page.js page
// adding some css to the input fields created in the mini task

// Understanding "use client"
// In page.js,
    // import Image from "next/image";
    // import styles from "./page.module.css";
    // console.log("hello"); 

    // this 'console.log' won't be seen in the browser console but in the vs code terminal seen
    // to see this in the browser console - add 'use client' in the top

// In page.js,
// 'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
// console.log("hello"); 

// console.log("hello");  -> works anywhere in the page.js file, inside the function Home () and outside it also
// so, we write codes before return() and after Home() because these codes are needed only inside Home() function

// Try to understand the following code:
// export default function Home() {
//   const name = "ram";                    // making new variable
//   return (
//     <div>
//       <input placeholder="username"/> 
//       <br/>
//       Hi {name}                          // use that variable inside {}
//       <input type="password" placeholder="password"/> 
//       <button className={styles.btn}>Login</button>
//     </div>
//   );
// }

// Try to understand the following code:
// export default function Home() {
//   const name = "ram";
//   const arr = ['gopal', 'chris', 'rihana'];
//   return (
//     <div>
//       Hi {name}
//       <br/>
//       {arr}   {/* this gives 'gopalchrisrihan' but we can show this array using loop in a card*/}
//       <input placeholder="username"/> 
//       <br/>
//       <input type="password" placeholder="password"/> 
//       <button className={styles.btn}>Login</button>
//     </div>
//   );
// }

// to see the arr in the browser,
// loop it and see in the browser using 'for each' or 'map'
// but for this we use 'map' because 'for each' doesn't return anything 
// 'for each' doesn't return so not used in the react

// learning to loop the array, array of objects and show in the frontend

// object-fit and display: block is usually used in the image css for removing further issues

// Class Summary
// Try to understand the following code:

"use client";
import Image from "next/image";
import styles from "./page.module.css";
console.log("hello");
// this 'console.log' won't be seen in the browser console but in the vs code terminal seen
// to see this in the browser console - add 'use client' in the top
// 'use client'

export default function Home() {
  const name = "ram";
  const arr = ["gopal", "chris", "rihana"];
  const products = [
    {
      productName: "hawking cooker",
      price: 300,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAurQ0qwlA_Mbf5ILyQuNBKVuFMElD3i2hlrAwnG1Fw&s=10",
    },
    {
      productName: "electric heater",
      price: 500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1LHE4_rSgJ50Y73bVh-lODM9UfnNbY-WC_JIBWx6Cg&s=10",
    },
    {
      productName: "electric blender",
      price: 400,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvEosUnfzWbAzgQt3rTxNqSAfS0sksK404NVGLBVKJw&s=10",
    },
  ];
  return (
    <div>
      Hi {name}
      <br />
      {arr}{" "}
      {/* this gives 'gopalchrisrihan' but we can show this array using loop in a card*/}
      <br />
      <hr />
      {/* array loop */}
      {arr.map((item, id) => {
        return <div className={styles.card}>{item}</div>;
      })}
      <h1>Products</h1>
      {/* products loop */}
      {products.map((item, id) => {
        return <div className={styles.card}>
          {item.productName}
          <img src={item.image} className={styles.productImage}/>
          <br/>
          Nrs.{item.price}
          </div>
      })}
      <input placeholder="username" />
      <br />
      <input type="password" placeholder="password" />
      <button className={styles.btn}>Login</button>
    </div>
  );
}

// Task for today:
// Try to create some card


