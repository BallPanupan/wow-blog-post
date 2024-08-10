"use client";

import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Welcome to My Blog</h1>
      <p>Home Page: Explore our latest posts and updates.</p>
    </div>
  )

}
