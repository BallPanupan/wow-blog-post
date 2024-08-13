"use client";

import styles from "./ourBlog.module.css";
import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import SearchBar from "@/components/SearchBar/SearchBar";
import Post from "@/components/PostList/Post";
import checkSignIn from "@/common/checkSignIn";
import ErrorModal from "@/components/ErrorModal/ErrorModal";

export default function Home() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [posts, setPosts] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchcommunity, setSearchcommunity] = useState<any>('')
  const [searchPost, setSearchPost] = useState<any>('')

  useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    setAccessToken(token ||  null);

    const checkUserSignIn = async () => {
      try{
        const isSignIn: any = await checkSignIn(accessToken);
        setProfile(isSignIn.data)
      }catch(error){
        console.error(error);
      }
    }
    checkUserSignIn()
  }, [accessToken]);

  const getAllPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/post/mypost', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Post');
      }
      return await response.json();
    } catch (error: any) {
      setErrorMessage('Failed to fetch Post')
      return [];
    }
  };

  const fetchPosts = useCallback(async () => {
    const posts = await getAllPosts();
    setPosts(posts.reverse());
  }, []);

  useEffect(() => {
    console.log(accessToken)
    fetchPosts();
  }, [fetchPosts]);

  const handleShowError = () => {
    setErrorMessage('');
  };

  const ListPosts = () => {
    return (
      <>
        {
          posts
            .filter((content: any) => (
              searchcommunity === 'All' ||
              searchcommunity === '' ||
              content.community === searchcommunity
            ))
            .filter((content: any) => content.topic.includes(searchPost))
            .map((content: any, index: any) => (
              <Post 
                key={index} 
                content={content}
                profile={profile} 
                fetchPosts={fetchPosts}
              />
            ))
        }
      </>
    );
  };

  return (
    <div>
      <Navbar
        profile={profile}
        setProfile={setProfile}
      />

      <div className="pt-5">

        <div className="container-fluid">
          <div className="row align-items-start justify-content-center">

            <div className={`col-2 ${styles.offcanvasBody}`}><MenuLeft /></div>

            <div className={`col-8 pt-5 mb-5 ${styles.mainContent}`}>

              <SearchBar
                setErrorMessage={setErrorMessage}
                fetchPosts={fetchPosts}
                searchcommunity={searchcommunity}
                setSearchcommunity={setSearchcommunity}
                searchPost={searchPost} 
                setSearchPost={setSearchPost}
              />

              <ErrorModal
                show={errorMessage}
                onClose={handleShowError}
                message={errorMessage}
              />

              <div className={styles.listPosts}>
                {<ListPosts />}
              </div>

            </div>

            <div className={`col-2 ${styles.colRight}`}></div>


          </div>
        </div>

      </div>

    </div>
  )

}
