"use client";

import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [])

  return (
    <div>
      <Navbar />

      <div className="pt-5 mt-5">
      <h1>Welcome to My Blog</h1>
      <p>Home Page: Explore our latest posts and updates.</p>

        <div className="container-fluid">
          <div className="row align-items-start justify-content-center">

            <div className={`col-2 ${styles.offcanvasBody}`}><MenuLeft /></div>

            <div className="col-8">.col-4 Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
          </div>
        </div>

      </div>
      
    </div>
  )

}
