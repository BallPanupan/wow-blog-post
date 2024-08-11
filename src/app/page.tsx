"use client";

import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [])

  return (
    <div>
      <Navbar />

      <div className="pt-5 mt-5">

        <div className="container-fluid">
          <div className="row align-items-start justify-content-center">

            <div className={`col-2 ${styles.offcanvasBody}`}><MenuLeft /></div>

            <div className="col-8">
              <SearchBar />
            </div>

          </div>
        </div>

      </div>
      
    </div>
  )

}
