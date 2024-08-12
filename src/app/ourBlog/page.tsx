"use client";

import styles from "./ourBlog.module.css";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import SearchBar from "@/components/SearchBar/SearchBar";
import Post from "@/components/PostList/Post";

export default function OurBlog() {

  return (
    <div>
      <Navbar />

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
