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

      <div className="pt-5 mt-5">
      <h1>Welcome to My Blog</h1>
      <p>Home Page: Explore our latest posts and updates.</p>

        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-2">.col-9</div>
            <div className="col-6">.col-4 Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
            <div className="col-2">.col-6 Subsequent columns continue along the new line.</div>
          </div>
        </div>

      </div>
      
    </div>
  )

}
