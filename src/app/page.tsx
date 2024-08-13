"use client";

import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import SearchBar from "@/components/SearchBar/SearchBar";
import Post from "@/components/PostList/Post";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';
import checkSignIn from "@/common/checkSignIn";
import ErrorModal from "@/components/ErrorModal/ErrorModal";

export default function Home() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null); // Initialize with null or empty object
  const [posts, setPosts] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleShowError = () => {
    setErrorMessage('');
  };

  useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    setAccessToken(token ? token : null);

    const accessToken = localStorage.getItem('accesstoken') ? localStorage.getItem('accesstoken') : null
    const checkUserSignIn = async () => {
      const isSignIn: any = await checkSignIn(accessToken);
      setProfile(isSignIn.data)
    }
    checkUserSignIn()
  }, [accessToken]);

  const getAllPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return await response.json();
    } catch (err) {
      console.error('Error fetching posts:', err);
      return [];
    }
  };
  

  const fetchPosts = useCallback(async () => {
    const posts = await getAllPosts();
    setPosts(posts.reverse());
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const ListPosts = () => {
    return (
      <>
        {posts.map((content: any, index: any) => (
          <Post key={index} content={content} />
        ))}
      </>
    );
  };



  return (
    <div>
      <Navbar profile={profile} setProfile={setProfile}/>
      

      <div className="pt-5">

        <div className="container-fluid">
          <div className="row align-items-start justify-content-center">

            <div className={`col-2 ${styles.offcanvasBody}`}><MenuLeft /></div>

            <div className={`col-8 pt-5 mb-5 ${styles.mainContent}`}>
              
              <SearchBar setErrorMessage={setErrorMessage}/>

              <ErrorModal
                show={errorMessage}
                onClose={handleShowError}
                message={errorMessage}
              />

              <div className={styles.listPosts}>
                { <ListPosts /> }
              </div>

            </div>

            <div className={`col-2 ${styles.colRight}`}></div>


          </div>
        </div>

      </div>
      
    </div>
  )

}
