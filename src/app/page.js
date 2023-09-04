"use client";
import styles from "./page.module.css";
import Navbar from "./head/navbar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="main-class">
      <div>
      <Navbar/>

        <h1>Fetch Data with Api in client component</h1>
        <Link href="/productlist/">Go to Product Page</Link>
        <br/><Link href="/people">User Details</Link>
      </div>
    </main>
  );
}
