"use client";

import styles from "./ourBlog.module.css";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import SearchBar from "@/components/SearchBar/SearchBar";
import Post from "@/components/PostList/Post";
import { useEffect, useState } from "react";
import checkSignIn from "@/common/checkSignIn";

export default function OurBlog() {
  const accessToken = localStorage.getItem('accesstoken') || null;
  const [profile, setProfile] = useState<any>({}); // Initialize with null or empty object

  useEffect(() => {
    const checkUserSignIn = async () => {
      const isSignIn: any = await checkSignIn(accessToken);
      setProfile(isSignIn.data)
    }
    checkUserSignIn()
  }, [accessToken]);

  return (
    <div>
      <Navbar profile={profile} setProfile={setProfile}/>

      <div className="pt-5">

        <div className="container-fluid">
          <div className="row align-items-start justify-content-center">

            <div className={`col-2 ${styles.offcanvasBody}`}><MenuLeft /></div>

            <div className={`col-8 pt-5 mb-5 ${styles.mainContent}`}>
              <SearchBar />

              <div className={styles.listPosts}>
                <Post />
                <Post />
              </div>

            </div>

            <div className={`col-2 ${styles.colRight}`}></div>


          </div>
        </div>

      </div>
      
    </div>
  )

}
