"use client";

import styles from "../post.module.css";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment/Comment";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function post() {
  const [posts, setPosts] = useState<any>([]);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [addCommentStatus, setAddCommentStatus] = useState<boolean | false>(false);
  
  const getAllPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/post?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Post');
      }
      return await response.json();
    } catch (error: any) {
      return [];
    }
  };

  const fetchPosts = useCallback(async () => {
    const data = await getAllPosts();
    setPosts(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleClick = () => {
    setAddCommentStatus(!addCommentStatus); // Toggle the status
  };

  const AddCommentBtn = (): React.ReactNode => {
    return (
      <div className="mt-5 mb-5">
        <button
          className={styles.addCommentsBtn}
          onClick={handleClick}
        >
          Add Comments
        </button>
      </div>
    );
  };

  const TextComment = () => {
    return (
      <div className="mt-5 mb-5">
        <textarea
          className={`${styles.commentControl}`}
          placeholder="What’s on your mind..."
        ></textarea>
        <div className="d-flex justify-content-end gap-2">
          <button
            className={styles.addCommentsBtn}
            onClick={handleClick}
          >
            Cancel
          </button>
          <button
            className={styles.postCommentsBtn}
            onClick={handleClick}
          >
            Post
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />

      <div className="pt-5">

        <div className="container-fluid ">
          <div className="row align-items-start justify-content-center">

            <div className={`col-2 ${styles.offcanvasBody}`}><MenuLeft /></div>

            <div className={`col-8 ${styles.mainContent}`}>

              <div className={`${styles.postContainer} flex-column`}>

                <Link href="/">
                  <Image
                    className="mb-5"
                    alt="arrow"
                    src={'/icon/arrow-Frame.svg'}
                    height={50}
                    width={50}
                  />
                </Link>





                {
                  posts.map((content: any) => {
                    console.log(content)
                    return (
                      <div key={content._id} className={`flex-column`}>
                        <div className='d-flex gap-2 justify-content-between'>
                          <div className='d-flex align-items-center gap-2'>
                            <div className={`${styles.avatar}`}>
                              <Image
                                src={'/images/profile.png'}
                                alt='login board'
                                width={50}
                                height={50}
                              />
                            </div>
                            <div>{content?.user?.username}</div>
                          </div>
                          <div>
                            <Image
                              src={'/icon/star.svg'}
                              alt='login board'
                              width={30}
                              height={30}
                            />
                          </div>
                        </div>

                        <div className='d-flex gap-2 mb-2 mt-2'>
                          <div className={styles.tags}>{content?.community}</div>
                        </div>

                        <h4 className='fw-bold'>{content?.topic}</h4>
                        <p className={styles.postContent}>{content.content}</p>
                        <div className='d-flex align-items-center gap-2'>
                          <div>
                            <Image
                              src={'/icon/message-circle-02.svg'}
                              alt='login board'
                              width={30}
                              height={30}
                            />
                          </div>
                          <div>32 Comments</div>
                        </div>
                      </div>
                    )
                  }) || null
                }





                { !addCommentStatus ? <AddCommentBtn /> : <TextComment /> }


                {/* commment component */}
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />

              </div>

            </div>

            <div className={`col-2 ${styles.colRight}`}></div>

          </div>
        </div>

      </div>

    </div>
  )

}
