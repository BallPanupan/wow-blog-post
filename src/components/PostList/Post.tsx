import Image from 'next/image';
import React from 'react';
import styles from "./post.module.css";
import Link from 'next/link';

const ModalDeletePost = () => {
	return (
		<>

			<div className={`modal fade align-content-center`} id="deletePost" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog d-flex justify-content-center">
					<div className={`modal-content ${styles.modalcontentDeletePost}`}>
						<div className="modal-body d-flex gap-2 flex-column align-items-center">
							<h6>Please confirm if you wish to delete the post</h6>
							<p className='text-center'>Are you sure you want to delete the post? Once deleted, it cannot be recovered.</p>
						</div>
						<div className="modal-footer border-0">
							<button type="button" className="normal-Btn ml-2" data-bs-dismiss="modal">Close</button>
							<button type="button" className="delete-Btn" data-bs-dismiss="modal">Delete</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


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


				<div className='d-flex flex-column align-items-end'>
					<div className='d-flex gap-2 cursor-pointer'>
						<Image
							className='cursor-pointer'
							src={'./icon/edit-03.svg'}
							alt='login board'
							width={30}
							height={30}
						/>
						<Image
							className='cursor-pointer'
							src={'./icon/trash-01.svg'}
							alt='login board'
							width={30}
							height={30}
							data-bs-toggle="modal" 
							data-bs-target="#deletePost"
						/>
					</div>
				</div>


			</div>

			<div className='d-flex gap-2 mb-2 mt-2'>
				<div className={styles.tags}>History</div>
			</div>
		
			<Link href='/post' className={styles.topic}>
				<h4 className='fw-bold'>header: The Beginning of the end of the world</h4>
			</Link>
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
			<ModalDeletePost />
		</div>
	);
}
