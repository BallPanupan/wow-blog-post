"use client";

import styles from "./post.module.css";
import Navbar from "@/components/Navbar/Navbar";
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import Image from "next/image";
import Link from "next/link";
import Post from "@/components/PostList/Post";

export default function post() {


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
                    src={'./icon/arrow-Frame.svg'}
                    height={50}
                    width={50}
                  />
                </Link>

                <div className={`flex-column mb-4`}>
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
                      <div>Jassica</div>
                    </div>
                    <div>
                      <Image
                        src={'./icon/star.svg'}
                        alt='login board'
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>

                  <div className='d-flex gap-2 mb-2 mt-2'>
                    <div className={styles.tags}>History</div>
                  </div>

                  <h4 className='fw-bold'>header: The Beginning og the end of the world</h4>
                  <p className={styles.postContent}>
                    The afterlife sitcom The Good Place comes to its culmination, the show’s
                    two protagonists, Eleanor and Chidi, contemplate their future. Having
                    lived thousands upon thousands of lifetimes together, and having experienced
                    virtually everything this life has to offer, they are weary. It is time for
                    it all to end. The show’s solution to this perpetual happiness-cum-weariness
                    is extinction. When you have had enough, when you are utterly sated by love and
                    joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.
                  </p>
                  <div className='d-flex align-items-center gap-2'>
                    <div>
                      <Image
                        src={'./icon/message-circle-02.svg'}
                        alt='login board'
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>32 Comments</div>
                  </div>
                </div>

                <button className={`${styles.addCommentsBtn}`}>Add Comments</button>

              </div>

            </div>

            <div className={`col-2 ${styles.colRight}`}></div>

            {/* commment component */}


          </div>
        </div>

      </div>

    </div>
  )

}
