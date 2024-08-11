import Image from 'next/image';
import React from 'react';
import styles from "./post.module.css";

export default function Post() {
	return (
		<div className={`${styles.postContainer} flex-column`}>
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
	);
}
