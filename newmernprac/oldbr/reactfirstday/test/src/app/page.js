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
