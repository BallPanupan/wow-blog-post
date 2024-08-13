import Image from 'next/image';
import React, { useState } from 'react';
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

const ModalEditePost = ({ newPost, setNewPost, communityList, handleClick }: any) => {
	return (
		<div className="modal fade align-content-center" id="editPost" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog d-flex ">
				<div className="modal-content">
					<div className="modal-header border-0">
						<h1 className="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body d-flex gap-2 flex-column">
						<div className="dropdown">
							<button
								type="button"
								className={`btn btn-white dropdown-toggle btn-success f-post`}
								id="dropdownMenuButton"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{
									!newPost.communityType ? 'Choose a community' : newPost.communityType
								}
							</button>

							{communityList.length > 0 && (
								<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									{communityList.map((name: any, index: any) => (
										<li key={index}>
											<a
												className="dropdown-item"
												onClick={() => setNewPost({ ...newPost, 'communityType': name })}
												href="#"
											>
												{name}
											</a>
										</li>
									))}
								</ul>
							)}
						</div>

						<input
							type="text"
							className='inputControl p-2'
							placeholder="Title"
							value={newPost.title}
							onChange={(e) => setNewPost({ ...newPost, 'title': e.target.value })}
						/>

						<textarea
							className='textareaControl p-2'
							placeholder="What’s on your mind..."
							value={newPost.content}
							onChange={(e) => setNewPost({ ...newPost, 'content': e.target.value })}
						></textarea>
					</div>
					<div className="modal-footer border-0">
						<button type="button" className="btn btn-success ml-2" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-success-dark" data-bs-dismiss="modal" onClick={handleClick}>Confirm</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Post({content}: any) {
	const [newPost, setNewPost] = useState({
		title: '',
		content: '',
		communityType: null,
	});

	const handleClick = () => {
		console.log('newPost: ', newPost);
		setNewPost({
			title: '',
			content: '',
			communityType: null,
		});
	};

	const communityList = [
		'All',
		'History',
		'Food',
		'Pats',
		'Health',
		'Fashion',
		'Exercise',
		'Others',
	]

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
					<div>{content?.user.username || ''}</div>
				</div>


				<div className='d-flex flex-column align-items-end'>
					<div className='d-flex gap-2 cursor-pointer'>
						<Image
							className='cursor-pointer'
							src={'./icon/edit-03.svg'}
							alt='login board'
							width={30}
							height={30}
							data-bs-toggle="modal"
							data-bs-target="#editPost"
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
				<div className={styles.tags}>{content?.community || ''}</div>
			</div>

			<Link href='/post' className={styles.topic}>
				<h4 className='fw-bold'>{content?.topic || ''}</h4>
			</Link>
			<p className={styles.postContent}>
				{content?.content || ''}
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
			<ModalEditePost newPost={newPost}
				setNewPost={setNewPost}
				communityList={communityList}
				handleClick={handleClick}
			/>
		</div>
	);
}
